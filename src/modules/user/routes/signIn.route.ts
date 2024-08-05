import { Router } from 'express';
import { signIn } from '../controllers/users.controller';

const router = Router();

router.post('/sign-in', signIn);

/**
 * @openapi
 * /users/sign-in:
 *   post:
 *     summary: Login of an existing user
 *     description: Logs in a user based on the provided email and password and returns user information.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignIn'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         headers:
 *           Authorization:
 *             description: Authorization header
 *             schema:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
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
