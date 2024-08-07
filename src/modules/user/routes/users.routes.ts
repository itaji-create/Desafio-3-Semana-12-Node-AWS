import { Router } from 'express';
import signInRoute from './signIn.route';
import signUpRoute from './signUp.route';
import upload from './upload';

const usersRouter = Router();

usersRouter.use('/', signUpRoute);
usersRouter.use('/', signInRoute);
usersRouter.use('/', upload);

export default usersRouter;
