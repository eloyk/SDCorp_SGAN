import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { UnidadMedida } from '../../models/unidad-medida';

export const actualizarUnidadMedida = async (req: Request, res: Response) => {
    const {
      descripcion,
      literal
    } = req.body;
    const unidadMedida = await UnidadMedida.findById(req.params.id);

    if (!unidadMedida) {
      throw new ErrorNoEncontrado();
    }
    unidadMedida.set({
      descripcion,
      literal
    });
    await unidadMedida.save();

    res.status(201).send(unidadMedida);
}