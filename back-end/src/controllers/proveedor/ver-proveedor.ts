import { Request, Response } from 'express';
import { Proveedor } from '../../models/proveedor'
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';

export const verProveedor = async (req: Request, res: Response) => {
    const proveedor = await Proveedor.findById(req.params.id);
    
    if (!proveedor) {
      throw new ErrorNoEncontrado();
    }

    res.send(proveedor);
  }