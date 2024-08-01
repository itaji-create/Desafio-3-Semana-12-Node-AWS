import { IUser } from '@shared/interfaces/user.interface';
import User from '../models/user.model';

export const createUser = async (userData: IUser) => {
  const user = new User(userData);
  return await user.save();
};
