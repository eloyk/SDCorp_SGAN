import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { FacturaVenta } from '../../models/factura-venta';
import { HistoricoStockDetalle } from '../../models/historico-stock-detalle';
import { ProductoCompra } from '../../models/producto-compra';
import { ProductoCompraTMP } from '../../models/producto-compraTMP';
import { StockDetalle } from '../../models/stock-detalle';
import { Venta } from '../../models/venta';
import { VentaTMP } from '../../models/ventaTMP';
import { EstadoCompra } from '../../types/estado-compra';

export const crearCliente = async (req: Request, res: Response) => {
    const { ventaId } = req.body;

    const ventaTMP = await VentaTMP.findById(ventaId).populate(
      'productoCompraTMP'
    );

    if (!ventaTMP) {
      throw new SolicitudIncorrecta(
        'Esta venta es invalida.'
      );
    }

    const venta = Venta.build({
      id: ventaTMP.id,
      tienda: ventaTMP.tienda,
      establecimiento: ventaTMP.establecimiento,
      cliente: ventaTMP.cliente,
      estadoCompra: EstadoCompra.EsperandoConfimacion,
      producto: ventaTMP.productoCompraTMP,
      totalVenta: ventaTMP.totalVenta!,
      cantidadProducto: ventaTMP.contadorProducto,
      expiracion: ventaTMP.expiracion,
      stockId: ventaTMP.stockId,
      usuarioIdAlta: ventaTMP.usuarioIdAlta,
      emailUsuarioAlta: ventaTMP.emailUsuarioAlta,
    });

    for (let buscarVenta in ventaTMP!.productoCompraTMP) {
      let productoEncontrado = ventaTMP!.productoCompraTMP[buscarVenta];
      
      const productoCompra = ProductoCompra.build({
        id: productoEncontrado.id,
        productoId: productoEncontrado.productoId,
        descripcionProducto: productoEncontrado.descripcionProducto,
        tipoProducto: productoEncontrado.tipoProducto,
        unidadMedidaId: productoEncontrado.unidadMedidaId,
        literal: productoEncontrado.literal,
        literalMedidaProducto: productoEncontrado.literalMedidaProducto,
        colorId: productoEncontrado.colorId,
        manejadorPrecioId: productoEncontrado.manejadorPrecioId,
        descripcionManejadorPrecio: productoEncontrado.descripcionManejadorPrecio,
        tipoPrecio: productoEncontrado.tipoPrecio,
        precioProducto: productoEncontrado.precioProducto,
        cantidadProducto: productoEncontrado.cantidadProducto,
        sumatoriaPrecioProducto: productoEncontrado.sumatoriaPrecioProducto,
        tiendaId: productoEncontrado.tiendaId,
        usuarioIdAlta: productoEncontrado.usuarioIdAlta,
        emailUsuarioAlta: productoEncontrado.emailUsuarioAlta,
      });
      await productoCompra.save();
      
      const stockDetalle = await StockDetalle.findOne({
        stockId: venta.stockId,
        productoId: productoEncontrado.productoId,
        literalUnidadMedida: productoEncontrado.literal,
        literalMedidaProducto: productoEncontrado.literalMedidaProducto,
        colorId: productoEncontrado.colorId
      })
  
      if(!stockDetalle || stockDetalle.cantidad == 0){
        throw new SolicitudIncorrecta(
          'El stock esta vacio o es invalido.'
        );
      }  
      
      if (stockDetalle!.cantidad < productoEncontrado.cantidadProducto) {
        throw new SolicitudIncorrecta(
          'Lo sentimos pero la cantidad ingresada es mayor al disponible.'
        );
      }

      const cantidadAux = stockDetalle.cantidad;
      const sumatoriaPrecioProductoAux = stockDetalle.sumatoriaPrecioProducto;
      stockDetalle.set({
        cantidad: cantidadAux - productoEncontrado.cantidadProducto,
        precioProducto: productoEncontrado.precioProducto,
        sumatoriaPrecioProducto: sumatoriaPrecioProductoAux - productoEncontrado.sumatoriaPrecioProducto!,
        fechaUltimaCompra: venta.fechaAlta!,
        usuarioUltimaCompra: venta.emailUsuarioAlta!,
      })
      await stockDetalle.save();
  
      ProductoCompraTMP.findOne({ _id: productoEncontrado.id }).remove().exec();
    }

    VentaTMP.findOne({ _id: ventaTMP!.id }).remove().exec();

    await venta.save();

    const factura = FacturaVenta.build({
      venta,
      tipoFactura: 'venta',
    });
  
    await factura.save();
  
    venta.set({
      facturaId: factura.id,
      estadoCompra: EstadoCompra.Completa,
    });

    await venta.save();

    const compraFinal = await Venta.findById(venta.id)
    .populate('producto')
    .populate('tienda')
    .populate('establecimiento')
    .populate('cliente');

    res.status(201).send(compraFinal);
  }
