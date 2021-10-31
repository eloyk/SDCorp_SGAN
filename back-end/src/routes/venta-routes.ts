import express from "express";
import { body } from "express-validator";
import { indexVenta } from "../controllers/venta";
import { crearPreVenta } from "../controllers/venta/crear-pre-venta";
import { crearCliente } from "../controllers/venta/crear-venta";
import { verVenta } from "../controllers/venta/ver-venta";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";

const router = express.Router();

router.post(
  '/api/venta/preventa',
  requireAuth,
  [
    body('establecimientoId')
      .not()
      .isEmpty()
      .withMessage('El id del establecimientoId es requerido'),
    body('clienteId')
      .not()
      .isEmpty()
      .withMessage('El id del cliente es requerido'),
    body('productoId')
      .not()
      .isEmpty()
      .withMessage('El id del producto es requerido'),
    body('unidadMedidaId')
      .not()
      .isEmpty()
      .withMessage('El id de la unidad medida es requerido'),
    body('manjadorPrecioId')
      .not()
      .isEmpty()
      .withMessage('El id de manjador Precio es requerido'),
    body('tiendaId').not().isEmpty().withMessage('El id de la tienda es requerido'),
  ],
  validarSolicitud,
  crearPreVenta
)

router.post(
  '/api/venta',
  requireAuth,
  [
    body('ventaId')
      .not()
      .isEmpty()
      .withMessage('El id de la venta es requerido'),
  ],
  validarSolicitud,
  crearCliente
)

router.get(
  '/api/venta',
  requireAuth,
  indexVenta
)

router.get(
  '/api/venta/:id',
  requireAuth,
  verVenta
)

export { router as ventaRouter };
