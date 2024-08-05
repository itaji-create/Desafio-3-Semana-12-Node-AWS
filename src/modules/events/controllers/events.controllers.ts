import AppError from '@shared/errors/AppError';
import * as service from '../services/events.services';
import { Request, Response } from 'express';

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await service.getEvents(req.query);
    res.status(200).json(events);
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

export const getEventById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const events = await service.getEventById(id);
    res.status(200).json(events);
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

export const createEvent = async (req: Request, res: Response) => {
  try {
    const events = await service.createEvent(req.body, req.user.id);
    res.status(201).json(events);
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

export const deleteEventById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await service.deleteEventById(id);
    res.status(204).json();
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

export const deleteEventsByDayOfWeek = async (req: Request, res: Response) => {
  try {
    const { dayOfWeek } = req.query;

    if (!dayOfWeek || typeof dayOfWeek !== 'string') {
      throw new AppError(
        'dayOfWeek query parameter is required',
        400,
        'Bad Request',
      );
    }
    const result = await service.deleteEventsByDayOfWeek(dayOfWeek);
    res.status(200).json(result);
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
