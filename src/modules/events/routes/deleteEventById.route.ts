import { Router } from 'express';
import { authenticateToken } from '../middlewares/token.authenticate';
import { deleteEventById } from '../controllers/events.controllers';

const router = Router();

router.delete('/:id', authenticateToken, deleteEventById);

export default router;
