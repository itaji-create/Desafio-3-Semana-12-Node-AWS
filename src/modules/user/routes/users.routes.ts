import { Router } from 'express';
import { signIn, signUp } from '../controllers/users.controller';
import validateUser from '../middlewares/user.validate';

const usersRouter = Router();

usersRouter.post('/sign-up', validateUser, signUp);
usersRouter.post('/sign-in', signIn);

export default usersRouter;
