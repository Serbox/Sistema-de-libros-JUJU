// src/routes/login.routes.js
import { Router } from 'express';
import { login } from '../controllers/logeo.controller.js';

const router = Router();

/**
 * @swagger
 * /oauth/login:
 *   post:
 *     summary: Iniciar sesión y obtener token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correo:
 *                 type: string
 *               contrasena:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login correcto
 *       400:
 *         description: Credenciales incorrectas
 */
router.post('/login', login);

export default router;
