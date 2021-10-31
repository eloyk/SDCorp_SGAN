import { Request, Response } from 'express';
import { ErrorNoEncontrado } from '../../errores/error-no-encontrado';
import { Producto } from '../../models/producto';

export const verProducto = async (req: Request, res: Response) => {
  const producto = await Producto.findById(req.params.id)
  .populate('medidaPrecio')
  .populate('colorImagen');
  
  if (!producto) {
    throw new ErrorNoEncontrado();
  }

  res.send(producto);
}