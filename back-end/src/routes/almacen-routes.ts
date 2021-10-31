import express from "express";
import { body } from "express-validator";
import { indexAlmacen } from "../controllers/almacen";
import { actualizarAlmacen } from "../controllers/almacen/actualizar-almacen";
import { registrarAlmacen } from "../controllers/almacen/crear-almacen";
import { verAlmacen } from "../controllers/almacen/ver-almacen";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";

const router = express.Router();

router.post(
  '/api/almacen/registrar',
  requireAuth,
  [
    body('descripcion')
      .trim()
      .isLength({ min: 4, max: 160 })
      .withMessage('El nombre del almacen debe contener minimo de 4 caracteres y maxima de 160'),
      body('establecimientoId')
      .not()
      .isEmpty()
      .withMessage(
        'El establecimientoId es requerido'
    ),
    body('tiendaId')
      .not()
      .isEmpty()
      .withMessage(
        'El tiendaId es requerido'
    ),
  ],
  validarSolicitud,
  registrarAlmacen
);

router.put(
  '/api/almacen/:id',
  requireAuth,
  actualizarAlmacen
);

router.get(
  '/api/almacen', 
  requireAuth, 
  indexAlmacen
);

router.get(
  '/api/almacen/:id',
  requireAuth,
  verAlmacen
)

export { router as almacenRouter };
