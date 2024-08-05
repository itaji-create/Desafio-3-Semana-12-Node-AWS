import eventsRouter from '@modules/events/routes/events.routes';
import usersRouter from '@modules/user/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/events', eventsRouter);

export default routes;
