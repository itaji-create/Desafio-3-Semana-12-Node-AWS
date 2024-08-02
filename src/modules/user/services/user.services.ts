import { ILoginParams, IUser } from '@shared/interfaces/user.interface';
import User from '../models/user.model';
import AppError from '@shared/errors/AppError';
import { Md5 } from 'ts-md5';
import jwt from 'jsonwebtoken';

export const signUp = async (userData: IUser) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new AppError('Email already in use', 400, 'Bad Request');
  }
  userData.password = Md5.hashStr(userData.password);
  const user = new User(userData);
  return await user.save();
};

export const token = async (email: string) => {
  const jwtConfig = {
    algorithm: 'HS256' as jwt.Algorithm,
    expiresIn: '1h',
  };

  const secret = 'secret';
  return jwt.sign({ email }, secret, jwtConfig);
};

export const signIn = async ({ email, password }: ILoginParams) => {
  const user = await User.findOne({ email, password: Md5.hashStr(password) });

  if (!user)
    throw new AppError('Email or password not found', 404, 'Not Found');

  return await token(user.email);
};
