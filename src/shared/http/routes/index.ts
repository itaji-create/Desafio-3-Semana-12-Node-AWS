import usersRouter from '@modules/user/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

routes.use('/users', usersRouter);

export default routes;
