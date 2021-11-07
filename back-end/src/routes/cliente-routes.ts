import express from "express";
import { body } from "express-validator";
import { indexCliente } from "../controllers/cliente";
import { actualizarCliente } from "../controllers/cliente/actualizar-cliente";
import { registrarCliente } from "../controllers/cliente/crear-cliente";
import { verCliente } from "../controllers/cliente/ver-cliente";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";


const router = express.Router();

router.post(
  '/cliente/registrar',
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
      body('correoElectronico')
      .not()
      .isEmpty()
      .withMessage(
        'El correo electronico es requerido'
    ),
    body('tipoDocumento')
      .not()
      .isEmpty()
      .withMessage(
        'El tipo documento es requerido'
    ),
    body('numeroDocumento')
      .not()
      .isEmpty()
      .withMessage(
        'El numero Documento es requerido'
    ),
    body('tiendaId')
      .not()
      .isEmpty()
      .withMessage(
        'El tiendaId es requerido'
    ),
  ],
  validarSolicitud,
  registrarCliente
);

router.put(
  '/cliente/:id',
  requireAuth,
  actualizarCliente
);

router.get(
  '/cliente', 
  requireAuth, 
  indexCliente
);

router.get(
  '/cliente/:id',
  requireAuth,
  verCliente
)

export { router as clienteRouter };
