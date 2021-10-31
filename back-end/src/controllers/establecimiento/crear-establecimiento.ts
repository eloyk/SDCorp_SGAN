import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { Establecimiento } from '../../models/establecimiento';
import { Tienda } from '../../models/tienda';

export const registrarEstablecimiento = async (req: Request, res: Response) => {
    const { 
      descripcion,
      subNombre,
      direccion,
      tiendaId
    } = req.body;

    const clienteExiste = await Establecimiento.findOne({ descripcion, subNombre });

    if (clienteExiste) {
      throw new SolicitudIncorrecta('El establecimiento ya existente');
    }

    const tienda = await Tienda.findOne({id: tiendaId});

    const establecimiento = Establecimiento.build({ 
      descripcion,
      subNombre,
      direccion,
      tiendaId: tienda!.id,
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email 
    });
    await establecimiento.save();

    res.status(201).send(establecimiento);
}