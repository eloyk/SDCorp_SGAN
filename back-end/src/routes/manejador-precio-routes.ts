import express from "express";
import { body } from "express-validator";
import { indexManejadorPrecio } from "../controllers/manejador-precio";
import { actualizarManejadorPrecio } from "../controllers/manejador-precio/actualizar-manejador-precio";
import { crearManejadorPrecio } from "../controllers/manejador-precio/crear-manejador-precio";
import { verManejadorPrecio } from "../controllers/manejador-precio/ver-manejador-precio";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";

const router = express.Router();

router.post(
    '/api/producto/manejadorprecio/registrar',
    requireAuth,
    [
      body('descripcion')
        .not()
        .isEmpty()
        .withMessage('El nombre del producto es requerido'),
      body('tipoPrecio')
        .not()
        .isEmpty()
        .withMessage('El tipo de precio es requerido'),
      body('precio').not().isEmpty().withMessage('El precio es requerido'),
      body('tiendaId').not().isEmpty().withMessage('El id de la tienda es requerido'),
    ],
    validarSolicitud,
    crearManejadorPrecio
)

router.put(
    '/api/producto/manejadorprecio/:id',
    requireAuth,
    actualizarManejadorPrecio
)

router.get(
    '/api/producto/manejadorprecio/all',
    requireAuth,
    indexManejadorPrecio
)

router.get(
    '/api/producto/manejadorprecio/:id',
    requireAuth,
    verManejadorPrecio
)

export { router as manejadorPrecioRouter };
