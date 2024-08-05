import { Router } from 'express';
import { authenticateToken } from '../middlewares/token.authenticate';
import { getEvents } from '../controllers/events.controllers';

const router = Router();

router.get('/', authenticateToken, getEvents);

export default router;
