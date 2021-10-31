import { Request, Response } from 'express';
import { ColorImagen } from '../../models/color-imagen';

export const indexImagen = async (req: Request, res: Response) => {
  const imagen = await ColorImagen.find()
  .populate('color')
  .populate('imagen')
    
  res.send(imagen);
}
