import { Router } from 'express';
import { authenticateToken } from '../middlewares/token.authenticate';
import { getEvents } from '../controllers/events.controllers';

const router = Router();

router.get('/', authenticateToken, getEvents);

/**
 * @openapi
 * /events:
 *   get:
 *     summary: Retrieve events
 *     description: Retrieve a list of events. You can filter events by description and day of the week.
 *     tags:
 *       - Events
 *     security:
 *       - TokenAuth: []
 *     parameters:
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         description: Filter events by description
 *       - in: query
 *         name: dayOfWeek
 *         schema:
 *           type: string
 *           enum:
 *             - sunday
 *             - monday
 *             - tuesday
 *             - wednesday
 *             - thursday
 *             - friday
 *             - saturday
 *         description: Filter events by day of the week
 *     responses:
 *       200:
 *         description: A list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
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
