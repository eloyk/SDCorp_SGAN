import { Request, Response } from 'express';
//import { validarSolicitud, SolicitudIncorrecta } from '@eloyk/comun';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { Cliente } from '../../models/cliente';
import { Tienda } from '../../models/tienda';

export const registrarCliente = async (req: Request, res: Response) => {
    const { 
      nombres,
      apellidos,
      telefono,
      direccion,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
      tiendaId
    } = req.body;

    const clienteExiste = await Cliente.findOne({ correoElectronico });

    if (clienteExiste) {
      throw new SolicitudIncorrecta('El correo electronico ya esta asociado a una cuenta existente');
    }

    const tienda = await Tienda.findOne({id: tiendaId});

    const cliente = Cliente.build({ 
      nombres,
      apellidos,
      telefono,
      direccion,
      tiendaId: tienda!.id,
      correoElectronico,
      tipoDocumento,
      numeroDocumento,
      usuarioIdAlta: req.usuarioActual!.id,
      emailUsuarioAlta: req.usuarioActual!.email 
    });
    await cliente.save();

    res.status(201).send(cliente);
}