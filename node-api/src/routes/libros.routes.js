import { Router } from 'express';
import {
  getLibros,
  getLibro,
  postLibro,
  putLibro,
  deleteLibro,
} from '../controllers/libros.controllers.js';
import { authRequired } from '../Middleware/auth.middleware.js';

const router = Router();

/**
 * @swagger
 * /libros:
 *   get:
 *     summary: Lista libros paginados
 *     parameters:
 *       - in: query
 *         name: pag
 *         schema:
 *           type: integer
 *         description: Página
 *       - in: query
 *         name: datos
 *         schema:
 *           type: integer
 *         description: Cantidad por página
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', authRequired, getLibros)

/**
 * @swagger
 * /libros/{id}:
 *   get:
 *     summary: Obtener un libro por id
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
router.get('/:id', authRequired, getLibro)

/**
 * @swagger
 * /libros:
 *   post:
 *     summary: Crear un libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               ano_public:
 *                 type: integer
 *               estado:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Libro creado
 */
router.post('/', authRequired, postLibro)

/**
 * @swagger
 * /libros/{id}:
 *   put:
 *     summary: Actualizar un libro
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
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               ano_public:
 *                 type: integer
 *               estado:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Libro actualizado
 */
router.put('/:id', authRequired, putLibro);

/**
 * @swagger
 * /libros/{id}:
 *   delete:
 *     summary: Eliminar un libro
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Libro eliminado
 */
router.delete('/:id', authRequired, deleteLibro);


export default router;
