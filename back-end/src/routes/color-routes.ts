import express from "express";
import { body } from "express-validator";
import { indexColor } from "../controllers/color";
import { actualizarColor } from "../controllers/color/actualizar-color";
import { registrarColor } from "../controllers/color/crear-color";
import { verColor } from "../controllers/color/ver-color";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";


const router = express.Router();

router.post(
  '/api/color/registrar',
  requireAuth,
  [
    body('descripcion')
      .trim()
      .isLength({ min: 2, max: 160 })
      .withMessage('La descripcion de la unidad debe contener minimo de 1 caracteres y maxima de 160'),
    body('colorImagen')
      .not()
      .isEmpty()
      .withMessage('El color es requerido'),
],
  validarSolicitud,
  registrarColor
);

router.put(
  '/api/color/:id',
  requireAuth,
  actualizarColor
);

router.get(
  '/api/color', 
  requireAuth, 
  indexColor
);

router.get(
  '/api/color/:id',
  requireAuth,
  verColor
)

export { router as colorRouter };
