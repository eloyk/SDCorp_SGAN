import { Request, Response } from 'express';
//import { validarSolicitud, SolicitudIncorrecta } from '@eloyk/comun';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { Proveedor } from '../../models/proveedor';
import { Tienda } from '../../models/tienda';

export const registrarProveedor = async (req: Request, res: Response) => {
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

    const proveedorExiste = await Proveedor.findOne({ correoElectronico });

    if (proveedorExiste) {
      throw new SolicitudIncorrecta('El correo electronico ya esta asociado a un proveedor existente');
    }

    const tienda = await Tienda.findOne({id: tiendaId});

    const proveedor = Proveedor.build({ 
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
    await proveedor.save();

    res.status(201).send(proveedor);
}