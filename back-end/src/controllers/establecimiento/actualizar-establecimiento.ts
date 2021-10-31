import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { Establecimiento } from '../../models/establecimiento';

export const actualizarEstablecimiento = async (req: Request, res: Response) => {
    const {
      descripcion,
      subNombre,
      direccion,
    } = req.body;
    const establecimiento = await Establecimiento.findById(req.params.id);

    if (!establecimiento) {
      throw new ErrorNoEncontrado();
    }
    establecimiento.set({
      descripcion,
      subNombre,
      direccion,
    });
    await establecimiento.save();

    res.status(201).send(establecimiento);
}