import express from "express";
import { body } from "express-validator";
import { indexProveedor } from "../controllers/proveedor";
import { actualizarProveedor } from "../controllers/proveedor/actualizar-proveedor";
import { registrarProveedor } from "../controllers/proveedor/crear-proveedor";
import { verProveedor } from "../controllers/proveedor/ver-proveedor";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";


const router = express.Router();

router.post(
  '/api/proveedor/registrar',
  requireAuth,
  [
    body('nombres')
      .trim()
      .isLength({ min: 4, max: 160 })
      .withMessage('Su nombre debe contener minimo de 4 caracteres y maxima de 160'),
    body('apellidos')
      .trim()
      .isLength({ min: 4, max: 160 })
      .withMessage(
        'Su apellido debe contener minimo de 4 caracteres y maxima de 160'
      ),
      body('tiendaId').not().isEmpty().withMessage('El id de la tienda es requerido'),
  ],
  validarSolicitud,
  registrarProveedor
);

router.put(
  '/api/proveedor/:id',
  requireAuth,
  actualizarProveedor
);

router.get(
  '/api/proveedor', 
  requireAuth, 
  indexProveedor
);

router.get(
  '/api/proveedor/:id',
  requireAuth,
  verProveedor
)

export { router as proveedorRouter };
