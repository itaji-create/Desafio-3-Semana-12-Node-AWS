import { Router } from 'express';
import getEventsRoute from './getEvents.route';
import createEventRoute from './createEvent.route';
import deleteEventByIdRoute from './deleteEventById.route';
import getEventByIdRoute from './getEventById.route';

const eventsRouter = Router();

eventsRouter.use('/', getEventsRoute);
eventsRouter.use('/', createEventRoute);
eventsRouter.use('/', deleteEventByIdRoute);
eventsRouter.use('/', getEventByIdRoute);

export default eventsRouter;
