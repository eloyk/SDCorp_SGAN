import { Request, Response } from 'express';
import { MedidaProducto } from '../../models/medida-producto'
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';

export const verMedidaProducto = async (req: Request, res: Response) => {
    const medidaProducto = await MedidaProducto.findById(req.params.id);
    
    if (!medidaProducto) {
      throw new ErrorNoEncontrado();
    }

    res.send(medidaProducto);
  }