import { Request, Response } from 'express';
import { Almacen } from '../../models/almacen';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';

export const verAlmacen = async (req: Request, res: Response) => {
    const almacen = await Almacen.findById(req.params.id);
    
    if (!almacen) {
      throw new SolicitudIncorrecta(
        'El almacen no existe.'
      );
    }

    res.send(almacen);
  }