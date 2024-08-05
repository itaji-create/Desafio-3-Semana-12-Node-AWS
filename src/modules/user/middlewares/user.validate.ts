import { Request, Response, NextFunction } from 'express';
import userSchema from '../schemas/users.schema';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const formattedErrors = error.details.map((err) => ({
      resource: err.path.join('.'),
      message: err.message,
    }));

    return res.status(400).json({
      type: 'Validation error',
      errors: formattedErrors,
    });
  }
  next();
};

export default validateUser;
