import { IUser } from '@shared/interfaces/user.interface';
import User from '../models/user.model';
import AppError from '@shared/errors/AppError';

export const createUser = async (userData: IUser) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new AppError('Email already in use', 400, 'Bad Request');
  }

  const user = new User(userData);
  return await user.save();
};
