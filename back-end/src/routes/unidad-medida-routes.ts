import express from "express";
import { body } from "express-validator";
import { indexUnidadMedida } from "../controllers/unidad-medida";
import { actualizarUnidadMedida } from "../controllers/unidad-medida/actualizar-unidad-medida";
import { registrarUnidadMedida } from "../controllers/unidad-medida/crear-unidad-medida";
import { verUnidadMedida } from "../controllers/unidad-medida/ver-unidad-medida";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";


const router = express.Router();

router.post(
  '/api/unidad-medida/registrar',
  requireAuth,
  [
    body('descripcion')
      .trim()
      .isLength({ min: 2, max: 160 })
      .withMessage('La descripcion de la unidad debe contener minimo de 1 caracteres y maxima de 160'),
    body('literal')
      .trim()
      .isLength({ min: 1, max: 160 })
      .withMessage(
        'El literal debe contener minimo de 1 caracteres y maxima de 160'
      ),
      body('tiendaId').not().isEmpty().withMessage('El id de la tienda es requerido'),
  ],
  validarSolicitud,
  registrarUnidadMedida
);

router.put(
  '/api/unidad-medida/:id',
  requireAuth,
  actualizarUnidadMedida
);

router.get(
  '/api/unidad-medida', 
  requireAuth, 
  indexUnidadMedida
);

router.get(
  '/api/unidad-medida/:id',
  requireAuth,
  verUnidadMedida
)

export { router as unidadMedidaRouter };
