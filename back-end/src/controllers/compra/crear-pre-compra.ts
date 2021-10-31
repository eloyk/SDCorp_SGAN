import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { Color } from '../../models/color';
import { CompraTMP } from '../../models/compraTMP';
import { Establecimiento } from '../../models/establecimiento';
import { ManejadorPrecio } from '../../models/manejador-precio';
import { MedidaProducto } from '../../models/medida-producto';
import { Producto } from '../../models/producto';
import { ProductoCompraTMP } from '../../models/producto-compraTMP';
import { Proveedor } from '../../models/proveedor';
import { Tienda } from '../../models/tienda';
import { UnidadMedida } from '../../models/unidad-medida';

export const crearPreCompra = async (req: Request, res: Response) => {
  const {
    establecimientoId,
    almacenId,
    proveedorId,
    productoId,
    unidadMedidaId,
    MedidaProductoId,
    manjadorPrecioId,
    tiendaId,
    ColorId,
    cantidadProducto,
  } = req.body;
  const EXPIRACION_VENTANA_SEGUNDOS = 1 * 60;

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

  const proveedor = await Proveedor.findById(proveedorId);
  if (!proveedor) {
    throw new SolicitudIncorrecta(
      'El proveedor no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
    );
  }

  const producto = await Producto.findById(productoId);
  if (!producto) {
    throw new SolicitudIncorrecta(
      'Este producto no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
    );
  }

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

  const color = await Color.findById(ColorId);
  if (!color) {
    throw new SolicitudIncorrecta(
      'Este color no existe favor intentar nuevamente o ponerse en contacto con servicio al cliente'
    );
  }

  const manejadorPrecio = await ManejadorPrecio.findById(manjadorPrecioId);
  if (!manejadorPrecio) {
    throw new SolicitudIncorrecta(
      'Este precio no es valido favor intentar nuevamente o ponerse en contacto con servicio al cliente'
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

  let compraTMP = await CompraTMP.findOne({
    tienda,
    establecimiento,
    proveedor,
    usuarioIdAlta: req.usuarioActual!.id,
  }).populate('productoCompraTMP');

  let total = 0;
  if (!compraTMP) {
    total = productoCompraTMP.sumatoriaPrecioProducto!;
    compraTMP = CompraTMP.build({
      tienda,
      establecimiento,
      proveedor,
      productoCompraTMP: [productoCompraTMP],
      contadorProducto: 1,
      totalCompra: total,
      expiracion,
      almacenId,
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email,
    });
  } else {
    let existecompra = false;
    for (let compra in compraTMP.productoCompraTMP) {
      let buscarProducto = compraTMP.productoCompraTMP[compra];
      if (buscarProducto.productoId == productoCompraTMP.productoId) {
        existecompra = true;
      }
    }

    if (!existecompra) {
      let conteo = compraTMP.contadorProducto;
      total =
        compraTMP.totalCompra! + productoCompraTMP.sumatoriaPrecioProducto!;
      compraTMP.set({ contadorProducto: conteo + 1, totalCompra: total });
      compraTMP.productoCompraTMP.push(productoCompraTMP);
    } else {
      total =
        compraTMP.totalCompra! +
        cantidadProducto * productoCompraTMP.precioProducto;
      compraTMP.set({ totalCompra: total });
    }
  }
  await compraTMP.save();
  
  const compraTemporal = await CompraTMP.findById(compraTMP.id)
    .populate('productoCompraTMP')
    .populate('tienda')
    .populate('establecimiento')
    .populate('proveedor');
    
  res.status(201).send(compraTemporal);
}