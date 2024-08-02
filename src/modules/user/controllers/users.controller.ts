import AppError from '@shared/errors/AppError';
import * as service from '../services/user.services';
import { Request, Response } from 'express';

export const signUp = async (req: Request, res: Response) => {
  try {
    const newUser = await service.signUp(req.body);
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

export const signIn = async (req: Request, res: Response) => {
  try {
    const token = await service.signIn(req.body);

    res.setHeader('Authorization', `Bearer ${token}`);

    return res.status(200).json(token);
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
