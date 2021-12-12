import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { Producto } from '../../models/producto';
import { Tienda } from '../../models/tienda';

export const crearProducto = async (req: Request, res: Response) => {
  const { nombreProducto, descripcion, codigoBarra, tipoProducto, tiendaId } = req.body;
  const tienda = await Tienda.findById(tiendaId);
  
  if (!tienda) {
    throw new SolicitudIncorrecta(
      'Este usuario no posee una tienda asociada a este cuenta.'
    );
  }
  
  const producto = Producto.build({
    producto: nombreProducto,
    descripcion,
    codigoBarra,
    tipoProducto,
    tiendaId: tienda.id,
    usuarioIdAlta: req.usuarioActual!.id,
    emailUsuarioAlta: req.usuarioActual!.email,
  });
  await producto.save();
  
  res.status(201).send(producto);
}