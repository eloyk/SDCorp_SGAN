import { Request, Response } from 'express';
import { Compra } from '../../models/compra';

export const indexCompra = async (req: Request, res: Response) => {
  const compra = await Compra.find()
    .populate('producto')
    .populate('tienda')
    .populate('establecimiento')
    .populate('proveedor');

  res.send(compra);
}