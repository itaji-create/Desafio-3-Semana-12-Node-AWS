import { Router } from 'express';
import { authenticateToken } from '../middlewares/token.authenticate';
import { getEventById } from '../controllers/events.controllers';

const router = Router();

router.get('/:id', authenticateToken, getEventById);

export default router;
