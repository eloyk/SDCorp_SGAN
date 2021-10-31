import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { MedidaProducto } from '../../models/medida-producto';

export const actualizarMedidaProducto = async (req: Request, res: Response) => {
    const {
      descripcion,
      literal
    } = req.body;
    const medidaProducto = await MedidaProducto.findById(req.params.id);

    if (!medidaProducto) {
      throw new ErrorNoEncontrado();
    }
    medidaProducto.set({
      descripcion,
      literal
    });
    await medidaProducto.save();

    res.status(201).send(medidaProducto);
}