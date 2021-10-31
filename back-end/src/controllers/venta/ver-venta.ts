import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { Venta } from '../../models/venta';

export const verVenta = async (req: Request, res: Response) => {
    const venta = await Venta.findById(req.params.id)    
    .populate('producto')
    .populate('tienda')
    .populate('establecimiento')
    .populate('cliente');

    if (!venta) {
      throw new ErrorNoEncontrado();
    }

    res.send(venta);
  }
