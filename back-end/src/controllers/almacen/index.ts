import { Request, Response } from 'express';
import { Almacen } from '../../models/almacen';

export const indexAlmacen = async (req: Request, res: Response) => {
  const almacen = await Almacen.find();

  res.send(almacen);
}