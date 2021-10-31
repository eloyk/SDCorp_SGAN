// import { Request, Response } from 'express';
// import { SolicitudIncorrecta } from '../../errores/solicitud-incorrecta';
// import { ManejadorPrecio } from '../../models/manejador-precio';
// import { Producto } from '../../models/producto';

// export const crearManejadorPrecio = async (req: Request, res: Response) => {
//   const {
//     descripcion,
//     tipoPrecio,
//     precio,
//     literalUnidadMedida,
//     productoId,
//   } = req.body;

//   const producto = await Producto.findById(productoId).populate(
//     'unidadMedida'
//   );

//   if (!producto) {
//     throw new SolicitudIncorrecta('El producto no existe');
//   }

//   let unidadMedidaId = '';
//   producto.unidadMedida!.forEach((unidadM: any) => {
//     if (unidadM.literal === literalUnidadMedida) {
//       unidadMedidaId = unidadM.id;
//     }
//   });

//   const manejadorPrecio = ManejadorPrecio.build({
//     unidadMedidaId,
//     descripcion,
//     tipoPrecio,
//     precio,
//   });
//   await manejadorPrecio.save();

//   producto.manejadorPrecio!.push(manejadorPrecio);
//   await producto.save();
  
//   res.status(201).send(producto);
// }
