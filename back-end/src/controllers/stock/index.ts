import { Request, Response } from 'express';
import { StockDetalle } from '../../models/stock-detalle';

export const indexStock = async (req: Request, res: Response) => {
    const stock = await StockDetalle.find();

    res.send(stock);
  }
