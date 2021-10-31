import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { ManejadorPrecio } from '../../models/manejador-precio';
import { MedidaPrecio } from '../../models/medida-precio';
import { MedidaProducto } from '../../models/medida-producto';
import { Producto } from '../../models/producto';
import { UnidadMedida } from '../../models/unidad-medida';

export const crearManejadorPrecio = async (req: Request, res: Response) => {
  const {
    descripcion,
    tipoPrecio,
    precio,
    porcientoDescuento,
    unidadMedidaId,
    medidaProductoId,
    productoId,
  } = req.body;

  const producto = await Producto.findById(productoId);

  if (!producto) {
    throw new SolicitudIncorrecta('El producto no existe');
  }

  const unidadMedida = await UnidadMedida.findById(unidadMedidaId);

  if (!unidadMedida) {
    throw new SolicitudIncorrecta('La unidad de medida no existe');
  }

  const medidaProducto = await MedidaProducto.findById(medidaProductoId);

  if (!medidaProducto) {
    throw new SolicitudIncorrecta('La medida del producto no existe');
  }

  const validarManejadorPrecio = await MedidaProducto.findOne({productoId, unidadMedidaId, medidaProductoId, descripcion, tipoPrecio});

  if (validarManejadorPrecio) {
    throw new SolicitudIncorrecta('Este precio ya existe, favor intentar nuevamente');
  }

  const manejadorPrecio = ManejadorPrecio.build({
    productoId: producto.id,
    unidadMedidaId: unidadMedida.id,
    medidaProductoId: medidaProducto.id,
    descripcion,
    tipoPrecio,
    precio,
    porcientoDescuento
  });
  await manejadorPrecio.save();

  let medidaPrecio = await MedidaPrecio.findOne({productoId: producto.id, unidadMedida, medidaProducto})    
  .populate('unidadMedida')
  .populate('medidaProducto')
  .populate('manejadorPrecio');
  
  if (!medidaPrecio) {
    medidaPrecio = MedidaPrecio.build({
      productoId: producto.id, 
      unidadMedida, 
      medidaProducto, 
      manejadorPrecio: [manejadorPrecio],
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email
    });
  } else {
    medidaPrecio.manejadorPrecio!.push(manejadorPrecio);
  }

  await medidaPrecio.save();

  // const vistaMedidaPrecio = MedidaPrecio.findById(medidaPrecio.id)
  //   .populate('unidadMedida')
  //   .populate('DocumentoMedidaProducto')
  //   .populate('DocManejadorPrecio')
  
  res.status(201).send(medidaPrecio);
}
