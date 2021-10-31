import { Request, Response } from 'express';
import { Compra } from '../../models/compra';

export const verCompra = async (req: Request, res: Response) => {
    const compra = await Compra.findById(req.params.id)
    .populate('producto')
    .populate('tienda')
    .populate('establecimiento')
    .populate('proveedor');

  res.send(compra);  
}