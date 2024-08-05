import { ILoginParams, IUser } from '@shared/interfaces/user.interface';
import User from '../models/user.model';
import AppError from '@shared/errors/AppError';
import { Md5 } from 'ts-md5';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';

export const signUp = async (userData: IUser) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new AppError('Email already in use', 400, 'Bad Request');
  }
  userData.password = Md5.hashStr(userData.password);
  userData.confirmPassword = Md5.hashStr(userData.confirmPassword);
  const user = new User(userData);
  return await user.save();
};

export const getToken = async (id: ObjectId) => {
  const jwtConfig = {
    algorithm: 'HS256' as jwt.Algorithm,
    expiresIn: '1h',
  };

  const secret = 'secret';
  return jwt.sign({ id }, secret, jwtConfig);
};

export const signIn = async (params: ILoginParams) => {
  const findUser = await User.findOne({
    email: params.email,
    password: Md5.hashStr(params.password),
  });

  if (!findUser)
    throw new AppError('Email or password not found', 404, 'Not Found');
  const token = await getToken(findUser.id);
  const user = {
    firstName: findUser.firstName,
    lastName: findUser.lastName,
    email: findUser.email,
  };
  return { token, user };
};
