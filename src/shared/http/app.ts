import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
      error: error.error,
    });
  }

  return response.status(500).json({
    statusCode: 500,
    message: 'Internal Server Error',
    error: 'error',
  });
});

export default app;
