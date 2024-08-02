import { Router } from 'express';
import { registerUser } from '../controllers/users.controller';
import validateUser from '../middlewares/user.validate';

const usersRouter = Router();

usersRouter.post('/sign-up', validateUser, registerUser);

export default usersRouter;
