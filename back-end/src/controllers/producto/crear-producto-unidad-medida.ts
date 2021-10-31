import { Request, Response } from 'express';
import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
import { ColorImagen } from '../../models/color-imagen';
import { MedidaPrecio } from '../../models/medida-precio';
import { Producto } from '../../models/producto';

export const crearProductoUnidadMedida = async (req: Request, res: Response) => {
  const medidaPrecio = await MedidaPrecio.findById(req.body.medidaPrecioId);

  if (!medidaPrecio) {
    throw new SolicitudIncorrecta('El precio de esta medida no existe');
  }
  
  const colorImagen = await ColorImagen.findById(req.body.colorImagenId);

  if (!colorImagen) {
    throw new SolicitudIncorrecta('El color o la imagen no es valida');
  }

  const productoExistnte = await Producto.findOne({_id: req.body.productoId, medidaPrecio, colorImagen });

  if (productoExistnte) {
    throw new SolicitudIncorrecta('Este producto ya tiene asociado la imagen o la medida ingresada');
  }
  
  const producto = await Producto.findById(req.body.productoId)  
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
  
  if (!producto) {
    throw new SolicitudIncorrecta('El producto no existe');
  }

  if (!producto.medidaPrecio!.map(med => med.id == medidaPrecio.id)){
    producto.medidaPrecio!.push(medidaPrecio);
  }

  producto.colorImagen!.push(colorImagen);
  await producto.save();
  
  res.status(201).send(producto);
}