import { Document } from 'mongoose';

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  city: string;
  country: string;
  password: string;
  confirmPassword: string;
}

export type { IUser };
