import { Request, Response } from 'express';
import { Establecimiento } from '../../models/establecimiento'
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';

export const verEstablecimiento = async (req: Request, res: Response) => {
    const establecimiento = await Establecimiento.findById(req.params.id);
    
    if (!establecimiento) {
      throw new ErrorNoEncontrado();
    }

    res.send(establecimiento);
  }