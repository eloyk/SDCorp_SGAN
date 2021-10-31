import { Request, Response } from 'express';
import { ErrorAutorizacion } from '../../errores/error-autorizacion';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { Producto } from '../../models/producto';

export const actualizarProducto = async (req: Request, res: Response) => {
  const producto = await Producto.findById(req.params.id).populate('unidadMedida');

  if (!producto) {
    throw new ErrorNoEncontrado();
  }

  if (producto.usuarioIdAlta !== req.usuarioActual!.id) {
    throw new ErrorAutorizacion();
  }

  producto.set({
    producto: req.body.producto,
    descripcion: req.body.descripcion,
    codigoBarra: req.body.codigoBarra,
  });
  
  await producto.save();
  res.send(producto);
}

