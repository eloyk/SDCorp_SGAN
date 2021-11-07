import express from "express";
import { body } from "express-validator";
import { indexCompra } from "../controllers/compra";
import { crearCompra } from "../controllers/compra/crear-compra";
import { crearPreCompra } from "../controllers/compra/crear-pre-compra";
import { verCompra } from "../controllers/compra/ver-compra";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";

const router = express.Router();

router.post(
  '/compra/precompra',
  requireAuth,
  [
    body('proveedorId')
      .not()
      .isEmpty()
      .withMessage('El id del proveedor es requerido'),
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
      body('tiendaId')
      .not()
      .isEmpty()
      .withMessage('El id de la tienda es requerido'),
  ],
  validarSolicitud,
  crearPreCompra
)

router.post(
  '/compra',
  requireAuth,
  [
    body('compraId')
      .not()
      .isEmpty()
      .withMessage('El id de la compra es requerido'),
  ],
  validarSolicitud,
  crearCompra
)

router.get(
  '/compra', 
  requireAuth,
  indexCompra
)

router.get(
  '/compra/:id',
  requireAuth,
  verCompra
)

export { router as compraRouter };
