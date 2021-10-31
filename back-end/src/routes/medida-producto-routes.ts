import express from "express";
import { body } from "express-validator";
import { indexMedidaProducto } from "../controllers/medida-producto";
import { actualizarMedidaProducto } from "../controllers/medida-producto/actualizar-medida-producto";
import { registrarMedidaProducto } from "../controllers/medida-producto/crear-medida-producto";
import { verMedidaProducto } from "../controllers/medida-producto/ver-medida-producto";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";


const router = express.Router();

router.post(
  '/api/medida-producto/registrar',
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
  ],
  validarSolicitud,
  registrarMedidaProducto
);

router.put(
  '/api/medida-producto/:id',
  requireAuth,
  actualizarMedidaProducto
);

router.get(
  '/api/medida-producto', 
  requireAuth, 
  indexMedidaProducto
);

router.get(
  '/api/medida-producto/:id',
  requireAuth,
  verMedidaProducto
)

export { router as medidaProductoRouter };
