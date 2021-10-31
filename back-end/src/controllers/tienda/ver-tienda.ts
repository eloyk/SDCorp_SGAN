import { Request, Response } from 'express';
import { Tienda } from '../../models/tienda'
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';

export const verTienda = async (req: Request, res: Response) => {
    const tienda = await Tienda.findById(req.params.id);
    
    if (!tienda) {
      throw new ErrorNoEncontrado();
    }

    res.send(tienda);
  }