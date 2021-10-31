import { Request, Response } from 'express';
import { MedidaProducto } from '../../models/medida-producto';

export const indexMedidaProducto = async (req: Request, res: Response) => {
  const medidaProducto = await MedidaProducto.find();

  res.send(medidaProducto);
}