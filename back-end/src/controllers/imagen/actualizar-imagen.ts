import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { Imagen } from '../../models/imagen';

export const actualizarImagen = async (req: Request, res: Response) => {
  const imagen = await Imagen.findById(req.params.id);

  if (!imagen) {
    throw new ErrorNoEncontrado();
  }

  imagen.set({
    descripcion: req.body.descripcion,
    urlImagen: req.body.urlImagen
  });
  await imagen.save();
  
  res.send(imagen);
}
