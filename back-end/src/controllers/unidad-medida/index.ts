import { Request, Response } from 'express';
import { UnidadMedida } from '../../models/unidad-medida';

export const indexUnidadMedida = async (req: Request, res: Response) => {
  const unidadMedida = await UnidadMedida.find();

  res.send(unidadMedida);
}