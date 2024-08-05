import { Router } from 'express';
import { authenticateToken } from '../middlewares/token.authenticate';
import { validateEvent } from '../middlewares/event.validator';
import { createEvent } from '../controllers/events.controllers';

const router = Router();

router.post('/', authenticateToken, validateEvent, createEvent);

export default router;
