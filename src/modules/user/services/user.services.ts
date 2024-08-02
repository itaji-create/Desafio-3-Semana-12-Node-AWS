import { IUser } from '@shared/interfaces/user.interface';
import User from '../models/user.model';
import AppError from '@shared/errors/AppError';
import { Md5 } from 'ts-md5';

export const createUser = async (userData: IUser) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new AppError('Email already in use', 400, 'Bad Request');
  }
  userData.password = Md5.hashStr(userData.password);
  const user = new User(userData);
  return await user.save();
};
