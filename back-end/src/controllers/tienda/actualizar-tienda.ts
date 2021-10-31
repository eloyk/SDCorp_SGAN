import { Request, Response } from 'express';
//import { validarSolicitud, ErrorNoEncontrado, SolicitudIncorrecta } from '@eloyk/comun';
import {ErrorNoEncontrado} from '../../errores/error-no-encontrado';
import { Tienda } from '../../models/tienda';

export const actualizarTienda = async (req: Request, res: Response) => {
    const {
      nombreTienda,
      clasifTienda,
      tipoTienda,
      duenio,
      telefono,
      emailTienda
    } = req.body;
    const tienda = await Tienda.findById(req.params.id);

    if (!tienda) {
      throw new ErrorNoEncontrado();
    }
    tienda.set({
      nombreTienda,
      clasifTienda,
      tipoTienda,
      duenio,
      telefono,
      emailTienda
    });
    await tienda.save();

    res.status(201).send(tienda);
  }