import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { MedidaPrecio } from '../../models/medida-precio';

export const verManejadorPrecio = async (req: Request, res: Response) => {
    const medidaPrecio = await MedidaPrecio.findById(req.params.id)
    .populate('unidadMedida')
    .populate('medidaProducto')
    .populate('manejadorPrecio');

    if (!medidaPrecio) {
      throw new ErrorNoEncontrado();
    }

    res.send(medidaPrecio);
  }
