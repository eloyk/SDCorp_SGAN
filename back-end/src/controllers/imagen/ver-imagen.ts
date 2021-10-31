import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { ColorImagen } from '../../models/color-imagen';

export const verImagen = async (req: Request, res: Response) => {
    const imagen = await ColorImagen.findById(req.params.id)
    .populate('color')
    .populate('imagen')

    if (!imagen) {
      throw new ErrorNoEncontrado();
    }

    res.send(imagen);
  }
