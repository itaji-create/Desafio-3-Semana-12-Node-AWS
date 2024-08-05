import { Router } from 'express';
import { signUp } from '../controllers/users.controller';
import validateUser from '../middlewares/user.validate';

const router = Router();

router.post('/sign-up', validateUser, signUp);

/**
 * @openapi
 * /users/sign-up:
 *   post:
 *     summary: Add a new user
 *     description: Registers a new user in the system.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignUp'
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Bad Request, invalid data supplied
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
