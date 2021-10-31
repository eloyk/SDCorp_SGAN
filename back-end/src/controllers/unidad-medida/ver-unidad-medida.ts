import { Request, Response } from 'express';
import { UnidadMedida } from '../../models/unidad-medida'
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';

export const verUnidadMedida = async (req: Request, res: Response) => {
    const unidadMedida = await UnidadMedida.findById(req.params.id);
    
    if (!unidadMedida) {
      throw new ErrorNoEncontrado();
    }

    res.send(unidadMedida);
  }