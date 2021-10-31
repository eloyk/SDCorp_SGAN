import { Request, Response } from 'express';
//import { requireAuth } from '@eloyk/comun';
import { Tienda } from '../../models/tienda';

export const indexTienda = async (req: Request, res: Response) => {
  const tienda = await Tienda.find();

  res.send(tienda);
}