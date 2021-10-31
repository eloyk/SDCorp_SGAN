import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { Almacen } from '../../models/almacen';
import { HistoricoAlmacen } from '../../models/historico-almacen';

export const actualizarAlmacen = async (req: Request, res: Response) => {
    const {
      descripcion
    } = req.body;

    const almacen = await Almacen.findById(req.params.id);
    if (!almacen) {
      throw new SolicitudIncorrecta(
        'El almacen no existe.'
      );
    }

    const historicoAlmacen = await HistoricoAlmacen.findById(req.params.id);
    if (!historicoAlmacen) {
      throw new SolicitudIncorrecta(
        'El almacen no existe.'
      );
    }

    almacen.set({
      descripcion,
    });
    await almacen.save();

    historicoAlmacen.set({
      descripcion,
    });
    await historicoAlmacen.save();    

    res.status(201).send(almacen);
}