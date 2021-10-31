import { Request, Response } from 'express';
import { Producto } from '../../models/producto';

export const indexProduto = async (req: Request, res: Response) => {
  const producto = await Producto.find()
  .populate({
    path: 'medidaPrecio',
    populate: [{
      path: 'unidadMedida',
      populate: {
        path: 'unidadMedida',
        model: 'UnidadMedida'
      }
    }, {
      path: 'medidaProducto',
      populate: {
        path: 'medidaProducto',
        model: 'MedidaProducto'
      }
    },[{
      path: 'manejadorPrecio',
      populate: {
        path: 'manejadorPrecio',
        model: 'ManejadorPrecio'
      }      
    }]]
  })
  .populate({
    path:'colorImagen',
    populate: [{
      path: 'color',
      populate: {
        path: 'color',
        model: 'Color'
      }      
    },{
      path: 'imagen',
      populate: {
        path: 'imagen',
        model: 'Imagen'
      }      
    }],
  })

  res.send(producto);
}