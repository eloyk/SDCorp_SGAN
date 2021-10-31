import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { AlmacenDetalle } from '../../models/almacen-detalle';
import { Color } from '../../models/color';
import { HistoricoStockDetalle } from '../../models/historico-stock-detalle';
import { ManejadorPrecio } from '../../models/manejador-precio';
import { MedidaProducto } from '../../models/medida-producto';
import { StockDetalle } from '../../models/stock-detalle';
import { Tienda } from '../../models/tienda';
import { TransaccionAlmacenStock } from '../../models/transaccion-almacen-stock';
import { UnidadMedida } from '../../models/unidad-medida';

export const crearStock = async (req: Request, res: Response) => {
    const {
      almacenId,
      stockId,
      productoId,
      colorId,
      literalUnidadMedida,
      literalMedidaProducto,
      cantidad,
      tiendaId
 } = req.body;

 const almacenDetalle = await AlmacenDetalle.findOne({
   almacenId,
   productoId,
   colorId,
   literalUnidadMedida,
   literalMedidaProducto
 })

 if (!almacenDetalle) {
  throw new SolicitudIncorrecta(
    'El almacen no es valido.'
  );
}

if (almacenDetalle.cantidad < cantidad) {
  throw new SolicitudIncorrecta(
    'Lo sentimos pero la cantidad ingresada es mayor al disponible.'
  );
}

const tienda = await Tienda.findOne({ id: tiendaId });

 let mostrarStock;
 const stockDetalle = await StockDetalle.findOne(
  {
    stockId,
    productoId,
    colorId,
    literalUnidadMedida,
    literalMedidaProducto
  })

  const color = await Color.findById(colorId);

  if (!stockDetalle) {
    //recordar agregar el ID de unidadMedida, medidaProducto para evitar 2 consultas
    const unidadMedida = await UnidadMedida.findOne({literal: almacenDetalle.literalUnidadMedida, tiendaId: tienda!.id})
    const medidaProducto = await MedidaProducto.findOne({literal: almacenDetalle.literalMedidaProducto, tiendaId: tienda!.id})
    const manejadorPrecio = await ManejadorPrecio.findOne({productoId, unidadMedidaId: unidadMedida!.id, medidaProductoId: medidaProducto!.id, tipoPrecio: 'venta', estado: true})
    const stockDetalle2 = StockDetalle.build({
      stockId,
      productoId,
      nombreProducto: almacenDetalle.nombreProducto,
      cantidad,
      tipoProducto: almacenDetalle.tipoProducto,
      tipoPrecio: manejadorPrecio!.tipoPrecio,
      managerPrecioId: manejadorPrecio!.id,
      descripcionPrecio: almacenDetalle.descripcionPrecio,
      literalUnidadMedida,
      literalMedidaProducto,
      colorId,
      precioProducto: manejadorPrecio!.precio,
      sumatoriaPrecioProducto: cantidad * manejadorPrecio!.precio,
      usuarioUltimaCompra: req.usuarioActual!.email,
    });

    await stockDetalle2.save();

    mostrarStock = stockDetalle2;

    const historicoStockDetalle = HistoricoStockDetalle.build({
      id: stockDetalle2.id,
      stockId: stockDetalle2.stockId,
      productoId: stockDetalle2.productoId,
      nombreProducto: stockDetalle2.nombreProducto,
      cantidad: stockDetalle2.cantidad,
      tipoProducto: stockDetalle2.tipoProducto,
      tipoPrecio: stockDetalle2.tipoPrecio,
      managerPrecioId: stockDetalle2.managerPrecioId,
      descripcionPrecio: stockDetalle2.descripcionPrecio,
      literalUnidadMedida: stockDetalle2.literalUnidadMedida,
      literalMedidaProducto: stockDetalle2.literalMedidaProducto,
      colorId: stockDetalle2.colorId,
      precioProducto: stockDetalle2.precioProducto,
      sumatoriaPrecioProducto: stockDetalle2.sumatoriaPrecioProducto,
      usuarioUltimaCompra: stockDetalle2.usuarioUltimaCompra,
    });

    await historicoStockDetalle.save();

    const cantidadAux = almacenDetalle.cantidad;
    const sumatoriaPrecioProductoAux = almacenDetalle.sumatoriaPrecioProducto;
    const sumatoriaAux = cantidad * almacenDetalle.precioProducto;
    almacenDetalle.set({
      cantidad: cantidadAux - cantidad,
      precioProducto: almacenDetalle.precioProducto,
      sumatoriaPrecioProducto: sumatoriaPrecioProductoAux - sumatoriaAux,
      fechaUltimaCompra: stockDetalle2.fechaUltimaConversion,
      usuarioUltimaCompra: stockDetalle2.usuarioUltimaCompra,
    })
    await almacenDetalle!.save();

    const transaccionAlmacenStock = TransaccionAlmacenStock.build({
      productoId,
      producto: stockDetalle2.productoId,
      tipoProducto: stockDetalle2.tipoProducto,
      literalUnidadMedida: stockDetalle2.literalUnidadMedida,
      literalMedidaProducto: stockDetalle2.literalMedidaProducto,
      color: color!.descripcion,
      precioCompra: almacenDetalle.precioProducto,
      precioVenta: stockDetalle2.precioProducto,
      cantidadProducto: cantidad,
      sumatoriaPrecioCompra: cantidad * almacenDetalle.precioProducto,
      sumatoriaPrecioVenta: cantidad * stockDetalle2.precioProducto,
      almacenId,
      stockId,
      tiendaId: tienda!.id,
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email,
    });
    await transaccionAlmacenStock.save();

  } else{
    const cantidadAuxStock = stockDetalle.cantidad + cantidad;
    const sumatoriaAuxStock = stockDetalle.precioProducto * cantidadAuxStock 
    stockDetalle.set({
      cantidad: cantidadAuxStock,
      sumatoriaPrecioProducto: sumatoriaAuxStock,
      usuarioUltimaCompra: req.usuarioActual!.email,
      fechaUltimaConversion: Date.now()
      })
      await stockDetalle!.save();

      mostrarStock = stockDetalle;

      const historicoStockDetalle = await HistoricoStockDetalle.findById(stockDetalle!.id);

      historicoStockDetalle!.set({
        cantidad: stockDetalle.cantidad,
        precioProducto: stockDetalle.precioProducto,
        sumatoriaPrecioProducto: stockDetalle.sumatoriaPrecioProducto,
        usuarioUltimaCompra: stockDetalle.usuarioUltimaCompra,
        fechaUltimaCompra: stockDetalle.fechaUltimaConversion
        })
        await historicoStockDetalle!.save();
  
      const cantidadAux = almacenDetalle.cantidad;
      const sumatoriaPrecioProductoAux = almacenDetalle.sumatoriaPrecioProducto;
      const sumatoriaAux = cantidad * almacenDetalle.precioProducto;
      almacenDetalle.set({
        cantidad: cantidadAux - cantidad,
        precioProducto: almacenDetalle.precioProducto,
        sumatoriaPrecioProducto: sumatoriaPrecioProductoAux - sumatoriaAux,
        fechaUltimaCompra: stockDetalle.fechaUltimaConversion,
        usuarioUltimaCompra: stockDetalle.usuarioUltimaCompra,
      })
      await almacenDetalle!.save();
      
      const transaccionAlmacenStock = TransaccionAlmacenStock.build({
        productoId,
        producto: stockDetalle.productoId,
        tipoProducto: stockDetalle.tipoProducto,
        literalUnidadMedida: stockDetalle.literalUnidadMedida,
        literalMedidaProducto: stockDetalle.literalMedidaProducto,
        color: color!.descripcion,
        precioCompra: almacenDetalle.precioProducto,
        precioVenta: stockDetalle.precioProducto,
        cantidadProducto: cantidad,
        sumatoriaPrecioCompra: cantidad * almacenDetalle.precioProducto,
        sumatoriaPrecioVenta: cantidad * stockDetalle.precioProducto,
        almacenId,
        stockId,
        tiendaId: tienda!.id,
        usuarioIdAlta: req.usuarioActual!.id,
        emailUsuarioAlta: req.usuarioActual!.email,
      });
      await transaccionAlmacenStock.save();
     }

    res.status(201).send(mostrarStock);
  }
