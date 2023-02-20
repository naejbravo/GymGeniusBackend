import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import routineRoutes from './routes/routine.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
// const userRoutes = require('./routes/user');
app.use('/auth', authRoutes);
app.use('/routine', routineRoutes);
// app.use('/user', userRoutes);

export default app;