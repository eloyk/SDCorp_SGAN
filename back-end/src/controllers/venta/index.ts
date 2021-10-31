import { Request, Response } from 'express';
import { Venta } from '../../models/venta';

export const indexVenta = async (req: Request, res: Response) => {
  const venta = await Venta.find()    
    .populate('producto')
    .populate('tienda')
    .populate('establecimiento')
    .populate('cliente');

  res.send(venta);
}
