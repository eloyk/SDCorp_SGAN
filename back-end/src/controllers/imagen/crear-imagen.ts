import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { Color } from '../../models/color';
import { ColorImagen } from '../../models/color-imagen';
import { Imagen } from '../../models/imagen';
import { Producto } from '../../models/producto';
import { Tienda } from '../../models/tienda';

export const crearImagen = async (req: Request, res: Response) => {
  const {
    descripcion,
    urlImagen,
    colorId,
    productoId,
    tiendaId
  } = req.body;

  const producto = await Producto.findById(productoId);

  if (!producto) {
    throw new SolicitudIncorrecta('El producto no existe');
  }

  const color = await Color.findById(colorId);

  if (!color) {
    throw new SolicitudIncorrecta('El color no existe');
  }

  const tienda = await Tienda.findOne({ id: tiendaId });

  const imagen = Imagen.build({
    descripcion,
    urlImagen,
    colorId: color.id,
    tiendaId: tienda!.id,
    usuarioIdAlta: req.usuarioActual!.id,
    emailUsuarioAlta: req.usuarioActual!.email
  });
  await imagen.save();

  let colorImagen = await ColorImagen.findOne({productoId: producto.id, color})    
  .populate('color')
  .populate('imagen');
  
  if (!colorImagen) {
    colorImagen = ColorImagen.build({
      productoId: producto.id, 
      color, 
      imagen: [imagen],
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email
    });
  } else {
    colorImagen.imagen!.push(imagen);
  }

  await colorImagen.save();

  // const vistaColorImagen = ColorImagen.findById(colorImagen.id)
  //   .populate('color')
  //   .populate('imagen')
  
  res.status(201).send(colorImagen);
}
