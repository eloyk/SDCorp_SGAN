import { Request, Response } from 'express';
//import { requireAuth } from '@eloyk/comun';
import { Cliente } from '../../models/cliente';

export const indexCliente = async (req: Request, res: Response) => {
  const cliente = await Cliente.find();

  res.send(cliente);
}