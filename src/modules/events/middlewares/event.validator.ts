import { Request, Response, NextFunction } from 'express';
import { body, ValidationError, validationResult } from 'express-validator';

export const validateEvent = [
  body('description').isString().withMessage('Description must be a string'),
  body('dayOfWeek')
    .isIn([
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ])
    .withMessage('Invalid dayOfWeek'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = errors.array().map((error: ValidationError) => ({
        resource: error.type,
        message: error.msg,
      }));

      return res.status(400).json({
        type: 'Validation Error',
        errors: formattedErrors,
      });
    }
    next();
  },
];
