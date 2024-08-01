import express from 'express';
import cors from 'cors';
//import AppError from '@shared/errors/AppError';
import routes from './routes';
import 'dotenv/config';
import connectDB from '@config/database';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/v1', routes);

export default app;
