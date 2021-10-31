import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { Cliente } from '../../models/cliente';
import { Color } from '../../models/color';
import { Establecimiento } from '../../models/establecimiento';
import { ManejadorPrecio } from '../../models/manejador-precio';
import { MedidaProducto } from '../../models/medida-producto';
import { Producto } from '../../models/producto';
import { ProductoCompraTMP } from '../../models/producto-compraTMP';
import { StockDetalle } from '../../models/stock-detalle';
import { Tienda } from '../../models/tienda';
import { UnidadMedida } from '../../models/unidad-medida';
import { VentaTMP } from '../../models/ventaTMP';

export const crearPreVenta = async (req: Request, res: Response) => {
    const {
      establecimientoId,
      stockId,
      clienteId,
      productoId,
      unidadMedidaId,
      MedidaProductoId,
      manjadorPrecioId,
      colorId,
      cantidadProducto,
      tiendaId
    } = req.body;
    const EXPIRACION_VENTANA_SEGUNDOS = 1 * 60;

    const unidadMedida = await UnidadMedida.findById(unidadMedidaId);
    if (!unidadMedida) {
      throw new SolicitudIncorrecta(
        'Esta unidad de medida no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }
    
    const medidaProducto = await MedidaProducto.findById(MedidaProductoId);
    if (!medidaProducto) {
      throw new SolicitudIncorrecta(
        'Esta medida no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }
  
    const stockDetalle = await StockDetalle.findOne(
      {
        stockId,
        productoId,
        colorId,
        literalUnidadMedida: unidadMedida.literal,
        literalMedidaProducto: medidaProducto.literal
      })

    if (stockDetalle!.cantidad < cantidadProducto) {
      throw new SolicitudIncorrecta(
        'Lo sentimos pero la cantidad ingresada es mayor al disponible.'
      );
    }
      
    const tienda = await Tienda.findOne({ id: tiendaId });
    if (!tienda) {
      throw new SolicitudIncorrecta(
        'Esta tienda no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }
  
    const establecimiento = await Establecimiento.findById(establecimientoId);
    if (!establecimiento) {
      throw new SolicitudIncorrecta(
        'Este establecimiento no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    const cliente = await Cliente.findById(clienteId);
    if (!cliente) {
      throw new SolicitudIncorrecta(
        'Este cliente no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    const producto = await Producto.findById(productoId);
    if (!producto) {
      throw new SolicitudIncorrecta(
        'Este producto no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    const color = await Color.findById(colorId);
    if (!color) {
      throw new SolicitudIncorrecta(
        'Este color no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }
  
    const manejadorPrecio = await ManejadorPrecio.findById(manjadorPrecioId);
    if (!manejadorPrecio) {
      throw new SolicitudIncorrecta(
        'Este precio no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
      );
    }

    let productoCompraTMP = await ProductoCompraTMP.findOne({
      productoId: producto.id,
      tiendaId: tienda.id,
      usuarioIdAlta: req.usuarioActual!.id,
    });

    if (!productoCompraTMP) {
      productoCompraTMP = ProductoCompraTMP.build({
        productoId: producto.id,
        descripcionProducto: producto.producto,
        tipoProducto: producto.tipoProducto,
        unidadMedidaId: unidadMedida.id,
        literal: unidadMedida.literal,
        literalMedidaProducto: medidaProducto.literal,
        colorId: color.id,
        manejadorPrecioId: manejadorPrecio.id,
        descripcionManejadorPrecio: manejadorPrecio.descripcion,
        tipoPrecio: manejadorPrecio.tipoPrecio,
        precioProducto: manejadorPrecio.precio,
        cantidadProducto: cantidadProducto,
        sumatoriaPrecioProducto: cantidadProducto * manejadorPrecio.precio,
        tiendaId: tienda.id,
        usuarioIdAlta: req.usuarioActual!.id,
        emailUsuarioAlta: req.usuarioActual!.email,
      });
      await productoCompraTMP.save();

    } else {
      const cantidad = productoCompraTMP.cantidadProducto + cantidadProducto;
      const sumatoria = productoCompraTMP.precioProducto * cantidad;
      productoCompraTMP.set({
        cantidadProducto: cantidad,
        sumatoriaPrecioProducto: sumatoria,
      });
      await productoCompraTMP.save();
    }

    const expiracion = new Date();
    expiracion.setSeconds(
      expiracion.getSeconds() + EXPIRACION_VENTANA_SEGUNDOS
    );

    let ventaTMP = await VentaTMP.findOne({
      tienda,
      establecimiento,
      cliente,
      usuarioIdAlta: req.usuarioActual!.id,
    }).populate('productoCompraTMP');

    let total = 0;
    if (!ventaTMP) {
      total = productoCompraTMP.sumatoriaPrecioProducto!;
      ventaTMP = VentaTMP.build({
        tienda,
        establecimiento,
        cliente,
        productoCompraTMP: [productoCompraTMP],
        contadorProducto: 1,
        totalVenta: total,
        expiracion,
        stockId,
        usuarioIdAlta: req.usuarioActual!.id,
        emailUsuarioAlta: req.usuarioActual!.email,
      });
    } else {
      let existeVenta = false;

      for (let buscarProducto in ventaTMP.productoCompraTMP) {
        let productoEncontrado = ventaTMP.productoCompraTMP[buscarProducto];

        if (productoEncontrado.productoId == productoCompraTMP.productoId) {
          existeVenta = true;
        }
      }
      if (!existeVenta) {
        let conteo = ventaTMP.contadorProducto;
        total =
          ventaTMP.totalVenta! + productoCompraTMP.sumatoriaPrecioProducto!;
        ventaTMP.set({ contadorProducto: conteo + 1, totalVenta: total });
        ventaTMP.productoCompraTMP.push(productoCompraTMP);
      } else {
        total =
          ventaTMP.totalVenta! +
          cantidadProducto * productoCompraTMP.precioProducto;
        ventaTMP.set({ totalVenta: total });
      }
    }

    await ventaTMP.save();

    const ventaTemporal = await VentaTMP.findById(ventaTMP.id)
      .populate('productoCompraTMP')
      .populate('tienda')
      .populate('establecimiento')
      .populate('cliente');

    res.status(201).send(ventaTemporal);
  }
