import express from 'express'
import librosRoutes from './routes/libros.routes.js'
import "dotenv/config";
import login from './routes/login.routes.js'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';
import estadosRoutes from './routes/estados.routes.js'
const app = express()

app.use(cors({
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.use(express.json())

app.use('/oauth',login)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/libros', librosRoutes);
app.use('/estados', estadosRoutes);

export default app