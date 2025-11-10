import {Router} from 'express'
import {getEstados,getEstadosById,postEstados,putEstados,deleteEstados} from '../controllers/estados.controller.js'
import { authRequired } from '../Middleware/auth.middleware.js';


const router = Router();

/**
 * @swagger
 * /estados:
 *   get:
 *     summary: Lista todos los estados
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', authRequired, getEstados);

/**
 * @swagger
 * /estados/{id}:
 *   get:
 *     summary: Obtener un estado por id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/:id', authRequired, getEstadosById);

/**
 * @swagger
 * /estados:
 *   post:
 *     summary: Crear un estado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Estado creado
 */
router.post('/', authRequired, postEstados);

/**
 * @swagger
 * /estados/{id}:
 *   put:
 *     summary: Actualizar un estado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Estado actualizado
 */
router.put('/:id', authRequired, putEstados);

/**
 * @swagger
 * /estados/{id}:
 *   delete:
 *     summary: Eliminar un estado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estado eliminado
 */
router.delete('/:id', authRequired, deleteEstados);

export default router;
