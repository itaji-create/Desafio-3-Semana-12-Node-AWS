import AppError from '@shared/errors/AppError';
import * as service from '../services/user.services';
import { Request, Response } from 'express';

export const signUp = async (req: Request, res: Response) => {
  try {
    await service.signUp(req.body);
    res.status(201).json();
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json(error);
    } else {
      res.status(500).json({
        statusCode: 500,
        message: 'An unexpected error occurred',
        error: 'Internal Server Error',
        err: error,
      });
    }
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { token, user } = await service.signIn(req.body);

    res.setHeader('Authorization', token);

    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json(error);
    } else {
      res.status(500).json({
        statusCode: 500,
        message: 'An unexpected error occurred',
        error: 'Internal Server Error',
        err: error,
      });
    }
  }
};
