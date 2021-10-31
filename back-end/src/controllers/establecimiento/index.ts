import { Request, Response } from 'express';
import { Establecimiento } from '../../models/establecimiento';

export const indexEstablecimiento = async (req: Request, res: Response) => {
  const establecimiento = await Establecimiento.find();

  res.send(establecimiento);
}