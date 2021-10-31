import { Request, Response } from 'express';
//import { validarSolicitud, ErrorNoEncontrado, SolicitudIncorrecta } from '@eloyk/comun';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { Proveedor } from '../../models/proveedor';

export const actualizarProveedor = async (req: Request, res: Response) => {
    const {
      nombres,
      apellidos,
      telefono,
      direccion,
      tipoDocumento,
      numeroDocumento,
    } = req.body;
    const proveedor = await Proveedor.findById(req.params.id);

    if (!proveedor) {
      throw new ErrorNoEncontrado();
    }
    proveedor.set({
      nombres,
      apellidos,
      telefono,
      direccion,
      tipoDocumento,
      numeroDocumento,
    });
    await proveedor.save();

    res.status(201).send(proveedor);
}