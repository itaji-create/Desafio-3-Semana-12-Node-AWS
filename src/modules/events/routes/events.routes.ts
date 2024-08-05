import { Router } from 'express';
import {
  createEvent,
  deleteEventById,
  getEventById,
  getEvents,
} from '../controllers/events.controllers';
import { authenticateToken } from '../middlewares/token.authenticate';
import { validateEvent } from '../middlewares/event.validator';

const eventsRouter = Router();

eventsRouter.get('/', authenticateToken, getEvents);

eventsRouter.get('/:id', authenticateToken, getEventById);

eventsRouter.post('/', authenticateToken, validateEvent, createEvent);

eventsRouter.delete('/:id', authenticateToken, deleteEventById);

export default eventsRouter;
