import { createUser } from '../services/user.services';
import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
