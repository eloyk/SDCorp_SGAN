import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { Color } from '../../models/color';

export const actualizarColor = async (req: Request, res: Response) => {
    const {
      descripcion,
    } = req.body;
    const color = await Color.findById(req.params.id);

    if (!color) {
      throw new ErrorNoEncontrado();
    }
    color.set({
      descripcion,
    });
    await color.save();

    res.status(201).send(color);
}