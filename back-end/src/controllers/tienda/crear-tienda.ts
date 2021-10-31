import { Request, Response } from 'express';
//import { validarSolicitud, SolicitudIncorrecta } from '@eloyk/comun';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { Tienda } from '../../models/tienda';

export const registrarTienda = async (req: Request, res: Response) => {
    const { 
      nombreTienda,
      clasifTienda,
      tipoTienda,
      duenio,
      telefono,
      emailTienda
    } = req.body;

    const tiendaExiste = await Tienda.findOne({ nombreTienda, duenio, usuarioIdAlta: req.usuarioActual!.id });

    if (tiendaExiste) {
      throw new SolicitudIncorrecta('Esta tienda ya fue creada');
    }

    const tienda = Tienda.build({ 
      nombreTienda,
      clasifTienda,
      tipoTienda,
      duenio,
      telefono,
      emailTienda,
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email 
    });
    await tienda.save();

    res.status(201).send(tienda);
  }