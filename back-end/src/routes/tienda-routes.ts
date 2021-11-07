import express from "express";
import { body } from "express-validator";
import { indexTienda } from "../controllers/tienda";
import { actualizarTienda } from "../controllers/tienda/actualizar-tienda";
import { registrarTienda } from "../controllers/tienda/crear-tienda";
import { verTienda } from "../controllers/tienda/ver-tienda";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";

const router = express.Router();

router.post(
  '/tienda/registrar',
  requireAuth,
  [
    body('nombreTienda')
      .trim()
      .isLength({ min: 4, max: 160 })
      .withMessage('El nombre de la tienda no es valido'),
      body('clasifTienda')
      .trim()
      .isLength({ min: 4, max: 60 })
      .withMessage(
        'La clasificacion de la tienda debe contener minimo de 4 caracteres y maxima de 60'
      ),
      body('tipoTienda')
      .trim()
      .isLength({ min: 4, max: 60 })
      .withMessage(
        'El tipo de tienda debe contener minimo de 4 caracteres y maxima de 60'
      ),
      body('duenio')
      .trim()
      .isLength({ min: 4, max: 60 })
      .withMessage(
        'El nombre del dueño de la tienda debe contener minimo de 4 caracteres y maxima de 60'
      ),
      body('tiendaId').not().isEmpty().withMessage('El id de la tienda es requerido'),
  ],
  validarSolicitud,
  registrarTienda
)
router.put(
  '/tienda/:id',
  requireAuth,
  actualizarTienda
)

router.get(
  '/tienda', 
  requireAuth, 
  indexTienda
)

router.get(
  '/tienda/:id',
  requireAuth,
  verTienda
)
    
export { router as tiendaRouter };
