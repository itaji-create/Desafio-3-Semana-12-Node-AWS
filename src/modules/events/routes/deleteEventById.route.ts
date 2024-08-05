import { Router } from 'express';
import { authenticateToken } from '../middlewares/token.authenticate';
import { deleteEventById } from '../controllers/events.controllers';

const router = Router();

router.delete('/:id', authenticateToken, deleteEventById);

/**
 * @openapi
 * /events/{id}:
 *   delete:
 *     summary: Delete an event by ID
 *     description: Delete a single event by its ID.
 *     tags:
 *       - Events
 *     security:
 *       - TokenAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the event to delete
 *     responses:
 *       204:
 *         description: Successfully deleted the event
 *       400:
 *         description: Invalid ID supplied
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized, if the request is missing or invalid token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *       404:
 *         description: Event not found, if no event is found with the provided ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalServerError'
 */

export default router;
