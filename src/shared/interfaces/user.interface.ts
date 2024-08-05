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

interface ILoginParams {
  email: string;
  password: string;
}

export type { IUser, ILoginParams };
