import { Request, Response } from 'express';
//import { validarSolicitud, ErrorNoEncontrado, SolicitudIncorrecta } from '@eloyk/comun';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { Cliente } from '../../models/cliente';

export const actualizarCliente = async (req: Request, res: Response) => {
    const {
      nombres,
      apellidos,
      telefono,
      direccion,
      tipoDocumento,
      numeroDocumento,
    } = req.body;
    const cliente = await Cliente.findById(req.params.id);

    if (!cliente) {
      throw new ErrorNoEncontrado();
    }
    cliente.set({
      nombres,
      apellidos,
      telefono,
      direccion,
      tipoDocumento,
      numeroDocumento,
    });
    await cliente.save();

    res.status(201).send(cliente);
}