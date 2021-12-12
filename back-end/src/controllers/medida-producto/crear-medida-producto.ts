import { Request, Response } from 'express';
//import { validarSolicitud, SolicitudIncorrecta } from '@eloyk/comun';
import { MedidaProducto } from '../../models/medida-producto';
import { Tienda } from '../../models/tienda';

export const registrarMedidaProducto = async (req: Request, res: Response) => {
    const { 
      descripcion,
      literal,
      tiendaId
    } = req.body;

    const tienda = await Tienda.findById(tiendaId);

    const medidaProducto = MedidaProducto.build({ 
      descripcion,
      literal,
      tiendaId: tienda!.id,
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email 
    });
    await medidaProducto.save();

    res.status(201).send(medidaProducto);
}