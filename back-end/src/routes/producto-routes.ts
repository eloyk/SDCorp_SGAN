import express from "express";
import { body } from "express-validator";
import { indexProduto } from "../controllers/producto";
import { actualizarProducto } from "../controllers/producto/actualizar-producto";
import { crearProducto } from "../controllers/producto/crear-nuevo-producto";
import { crearProductoUnidadMedida } from "../controllers/producto/crear-producto-unidad-medida";
import { verProducto } from "../controllers/producto/ver-productos";
import { requireAuth } from "../middlewares/autorizacion-requerida";
import { validarSolicitud } from "../middlewares/validar-solicitud";

const router = express.Router();

router.post(
    '/api/producto/registrar',
    requireAuth,
    [
      body('descripcion')
        .not()
        .isEmpty()
        .withMessage('El nombre del producto es requerido'),
      body('tipoProducto')
        .not()
        .isEmpty()
        .withMessage('El tipo de producto es requerido'),
        body('tiendaId').not().isEmpty().withMessage('El id de la tienda es requerido'),
    ],
    validarSolicitud,
    crearProducto
)

router.post(
    '/api/producto/unidadmedida',
    requireAuth,
    crearProductoUnidadMedida
)

router.put(
    '/api/producto/:id',
    requireAuth,
    actualizarProducto
)

router.get(
    '/api/producto',
    requireAuth,
    indexProduto
)

router.get(
    '/api/producto/:id',
    requireAuth,
    verProducto
)

export { router as productoRouter };
