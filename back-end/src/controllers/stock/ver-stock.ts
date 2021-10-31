import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { StockDetalle } from '../../models/stock-detalle';

export const verStock = async (req: Request, res: Response) => {
    const stock = await StockDetalle.findById(req.params.id);

    if (!stock) {
      throw new ErrorNoEncontrado();
    }

    res.send(stock);
  }
