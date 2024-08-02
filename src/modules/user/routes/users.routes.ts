import { Router } from 'express';
import { signIn, signUp } from '../controllers/users.controller';
import validateUser from '../middlewares/user.validate';

const usersRouter = Router();

usersRouter.post('/sign-up', validateUser, signUp);
usersRouter.post('/sign-in', signIn);

/**
 * @openapi
 * /users/sign-up:
 *   post:
 *     summary: Cadastro de novo usuário
 *     description: Registra um novo usuário no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Fulano"
 *                 description: Nome do usuário.
 *               lastName:
 *                 type: string
 *                 example: "de Tal"
 *                 description: Sobrenome do usuário.
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "exemplo@example.com"
 *                 description: Endereço de e-mail do usuário.
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 example: "1990-01-01"
 *                 description: Data de nascimento do usuário no formato ISO.
 *               city:
 *                 type: string
 *                 example: "Cidade"
 *                 description: Cidade onde o usuário reside.
 *               country:
 *                 type: string
 *                 example: "País"
 *                 description: País onde o usuário reside.
 *               password:
 *                 type: string
 *                 example: "password123"
 *                 description: Senha do usuário. Deve ter pelo menos 6 caracteres.
 *               confirmPassword:
 *                 type: string
 *                 example: "password123"
 *                 description: Confirmação da senha. Deve corresponder à senha fornecida.
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                    type: string
 *                    example: "Fulano"
 *                 lastName:
 *                    type: string
 *                    example: "de Tal"
 *                 email:
 *                    type: string
 *                    format: email
 *                    example: "exemplo@example.com"
 *                 birthDate:
 *                    type: string
 *                    format: date
 *                    example: "1990-01-01"
 *                 city:
 *                    type: string
 *                    example: "Cidade"
 *                 country:
 *                    type: string
 *                    example: "País"
 *       400:
 *         description: Dados inválidos fornecidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Validation error"
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       field:
 *                         type: string
 *                       message:
 *                         type: string
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 *                 error:
 *                   type: string
 *                   example: "Server Error"
 */

/**
 * @openapi
 * /users/sign-in:
 *   post:
 *     summary: Login de usuário
 *     description: Faz o login de um usuário com base no e-mail e senha fornecidos e retorna informações do usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "exemplo@example.com"
 *                 description: Endereço de e-mail do usuário.
 *               password:
 *                 type: string
 *                 example: "password123"
 *                 description: Senha do usuário.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login bem-sucedido, retorna informações do usuário.
 *         headers:
 *           Authorization:
 *             description: Authorization header
 *             schema:
 *               type: string
 *               example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                   example: "Fulano"
 *                   description: Nome do usuário.
 *                 lastName:
 *                   type: string
 *                   example: "de Tal"
 *                   description: Sobrenome do usuário.
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: "user@example.com"
 *                   description: Endereço de e-mail do usuário.
 *       400:
 *         description: Bad credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: "Validation Error"
 *                   description: Tipo de erro.
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       resource:
 *                         type: string
 *                         example: "email"
 *                         description: O campo onde ocorreu o erro.
 *                       message:
 *                         type: string
 *                         example: "invalid email"
 *                         description: Mensagem de erro detalhada.
 *             example:
 *               type: "Validation Error"
 *               errors:
 *                 - resource: "email"
 *                   message: "invalid email"
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 *                 error:
 *                   type: string
 *                   example: "Server Error"
 */

export default usersRouter;
