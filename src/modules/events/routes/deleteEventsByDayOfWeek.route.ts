import { Router } from 'express';
import { authenticateToken } from '../middlewares/token.authenticate';
import { deleteEventsByDayOfWeek } from '../controllers/events.controllers';

const router = Router();

router.delete('/', authenticateToken, deleteEventsByDayOfWeek);

/**
 * @swagger
 * /events:
 *   delete:
 *     summary: Delete all events by dayOfWeek
 *     description: Delete all events for the specified dayOfWeek.
 *     tags: [Events]
 *     security:
 *       - TokenAuth: []
 *     parameters:
 *       - in: query
 *         name: dayOfWeek
 *         required: true
 *         schema:
 *           type: string
 *           enum: [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
 *         description: The day of the week to delete events for
 *     responses:
 *       200:
 *         description: Events deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Deleted X events for dayOfWeek: sunday"
 *       400:
 *         description: Bad Request, invalid data supplied
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       401:
 *         description: Unauthorized, if the request is missing or invalid token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *       404:
 *         description: Not Found, event not found
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
