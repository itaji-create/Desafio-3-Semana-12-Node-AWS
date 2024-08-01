import express, { Request, Response } from 'express';
import cors from 'cors';
import AppError from '@shared/errors/AppError';
import routes from './routes';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/data', {})
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB', err);
  });

app.use('/v1', routes);

export default app;
