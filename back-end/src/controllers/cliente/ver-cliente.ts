import { Request, Response } from 'express';
import { Cliente } from '../../models/cliente'
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';

export const verCliente = async (req: Request, res: Response) => {
    const cliente = await Cliente.findById(req.params.id);
    
    if (!cliente) {
      throw new ErrorNoEncontrado();
    }

    res.send(cliente);
  }