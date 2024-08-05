import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'secret';

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json(new AppError('Not Authenticated', 401, 'Unauthorized'));
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json(new AppError('Invalid Token', 403, 'Forbidden'));
    }

    req.user = decoded as jwt.JwtPayload;

    next();
  });
};
