import { Router } from 'express';
import signInRoute from './signIn.route';
import signUpRoute from './signUp.route';

const usersRouter = Router();

usersRouter.use('/', signUpRoute);
usersRouter.use('/', signInRoute);

export default usersRouter;
