import { Request, Response } from 'express';
//import { requireAuth } from '@eloyk/comun';
import { Usuario } from '../../models/usuario';

export const indexUsuario = async (req: Request, res: Response) => {
  const usuario = await Usuario.find();

  res.send(usuario);
};

