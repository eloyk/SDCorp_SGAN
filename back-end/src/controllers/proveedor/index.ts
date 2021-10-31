import { Request, Response } from 'express';
//import { requireAuth } from '@eloyk/comun';
import { Proveedor } from '../../models/proveedor';

export const indexProveedor = async (req: Request, res: Response) => {
  const proveedor = await Proveedor.find();

  res.send(proveedor);
}