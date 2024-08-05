import { Router } from 'express';
import { authenticateToken } from '../middlewares/token.authenticate';
import { validateEvent } from '../middlewares/event.validator';
import { createEvent } from '../controllers/events.controllers';

const router = Router();

router.post('/', authenticateToken, validateEvent, createEvent);

/**
 * @openapi
 * /events:
 *   post:
 *     summary: Create a new event
 *     description: Create a new event with the provided details.
 *     tags:
 *       - Events
 *     security:
 *       - TokenAuth: []
 *     requestBody:
 *       description: The event details to create
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EventInput'
 *     responses:
 *       201:
 *         description: Successfully created the event
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       401:
 *         description: Unauthorized, if the request is missing or invalid token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *       400:
 *         description: Bad request, if the provided data is invalid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalServerError'
 */

export default router;
