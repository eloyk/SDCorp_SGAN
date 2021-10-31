import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { usuarioActual } from './middlewares/usuario-actual'
import { ErrorNoEncontrado } from './errores/error-no-encontrado'
import { controladorError } from './middlewares/controlador-error'

import { almacenRouter } from './routes/almacen-routes';
import { clienteRouter } from './routes/cliente-routes';
import { colorRouter } from './routes/color-routes';
import { compraRouter } from './routes/compra-routes';
import { establecimientoRouter } from './routes/establecimiento-routes';
import { imagenRouter } from './routes/imagen-routes';
import { manejadorPrecioRouter } from './routes/manejador-precio-routes';
import { medidaProductoRouter } from './routes/medida-producto-routes';
import { productoRouter } from './routes/producto-routes';
import { proveedorRouter } from './routes/proveedor-routes';
import { stockRouter } from './routes/stock-routes'
import { tiendaRouter } from './routes/tienda-routes';
import { unidadMedidaRouter } from './routes/unidad-medida-routes';
import { usuarioRouter } from './routes/usuario-routes';
import { ventaRouter } from './routes/venta-routes'

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    //secure: process.env.NODE_ENV !== 'test',
    secure: false,
  })
);

app.use(usuarioActual);

//Routes Almacen
app.use(almacenRouter);

//Routes Cliente
app.use(clienteRouter);

//Routes Color
app.use(colorRouter);

//Routes Compra
app.use(compraRouter);

//Routes Establecimiento
app.use(establecimientoRouter);

//Routes Imagen
app.use(imagenRouter);

//Routes Manejador de Precio
app.use(manejadorPrecioRouter);

//Routes Medida de Producto 
app.use(medidaProductoRouter);

//Routes Producto
app.use(productoRouter);

//Routes Proveedor
app.use(proveedorRouter);

//Routes Stock
app.use(stockRouter);

//Routes Tienda
app.use(tiendaRouter);

//Routes Unidad de medida
app.use(unidadMedidaRouter);

//Routes Usuario
app.use(usuarioRouter);

//Routes Venta
app.use(ventaRouter);

app.all('*', async (req, res) => {
  throw new ErrorNoEncontrado();
});

app.use(controladorError);

export { app };
