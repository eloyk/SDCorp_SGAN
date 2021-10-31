import { Request, Response } from 'express';
import { Color } from '../../models/color'
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';

export const verColor = async (req: Request, res: Response) => {
    const color = await Color.findById(req.params.id);
    
    if (!color) {
      throw new ErrorNoEncontrado();
    }

    res.send(color);
  }