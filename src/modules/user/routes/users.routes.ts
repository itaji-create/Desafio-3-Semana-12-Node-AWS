import { Router } from 'express';
import User from '../models/user.model';
import { registerUser } from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.post('/sign-up', registerUser);

usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default usersRouter;
