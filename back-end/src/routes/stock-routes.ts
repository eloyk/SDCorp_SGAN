import express from "express";
import { body } from "express-validator";
import { indexStock } from "../controllers/stock";
import { crearStock } from "../controllers/stock/crear-stock";
import { verStock } from "../controllers/stock/ver-stock";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";

const router = express.Router();

router.post(
  '/stock/registrar',
  requireAuth,
  [
    body('almacenId')
      .not()
      .isEmpty()
      .withMessage('El almacen es requerido'),
    body('stockId')
      .not()
      .isEmpty()
      .withMessage('El almacen es requerido'),
      body('tiendaId').not().isEmpty().withMessage('El id de la tienda es requerido'),
  ],
  validarSolicitud,
  crearStock
);

router.get(
  '/stock',
  requireAuth,
  indexStock
);

router.get(
  '/stock/:id',
  requireAuth,
  verStock
)

export { router as stockRouter };
