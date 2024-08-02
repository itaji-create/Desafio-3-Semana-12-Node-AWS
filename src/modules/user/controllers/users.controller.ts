import AppError from '@shared/errors/AppError';
import { createUser } from '../services/user.services';
import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json(error);
    } else {
      res.status(500).json({
        statusCode: 500,
        message: 'An unexpected error occurred',
        error: 'Internal Server Error',
      });
    }
  }
};
