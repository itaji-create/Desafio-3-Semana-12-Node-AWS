import request from 'supertest';
import app from '../shared/http/app';
import { connectDB, disconnectDB } from '@config/database';
import 'dotenv/config';

const urlSignUp = '/users/sign-up';
const urlSignIn = '/users/sign-in';

describe('Testes da rota de cadastro dos usuários', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  const userData = {
    firstName: 'string',
    lastName: 'string',
    birthDate: '2024-08-01',
    city: 'string',
    country: 'string',
    email: 'email@test.com',
    password: 'string',
    confirmPassword: 'string',
  };

  test('Cria um novo usuário', async () => {
    const res = await request(app).post(urlSignUp).send(userData);
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe('string');
  });

  test('Falha ao tentar criar usuário com email já existente no database', async () => {
    const res2 = await request(app).post(urlSignUp).send(userData);
    expect(res2.status).toBe(400);
  });

  test('Cria usuário com um novo email', async () => {
    userData.email = 'email.teste@gmail.com';
    const res2 = await request(app).post(urlSignUp).send(userData);
    expect(res2.status).toBe(201);
  });

  test('Falha ao tentar criar usuário com senha divergente da confimação de senha', async () => {
    userData.email = 'email.teste3@gmail.com';
    userData.confirmPassword = 'anotherPassword';
    const res2 = await request(app).post(urlSignUp).send(userData);
    expect(res2.status).toBe(400);
  });
});

describe('Testes da rota de login dos usuários', () => {
  beforeAll(async () => {
    await connectDB();

    await request(app).post(urlSignUp).send(userData);
  });

  afterAll(async () => {
    await disconnectDB();
  });
  const userData = {
    firstName: 'string',
    lastName: 'string',
    birthDate: '2024-08-01',
    city: 'string',
    country: 'string',
    email: 'email@test.com',
    password: 'string',
    confirmPassword: 'string',
  };

  const login = {
    email: userData.email,
    password: userData.password,
  };

  test('Faz login com os dados corretos e retorna um token no headers', async () => {
    const res = await request(app).post(urlSignIn).send(login);

    expect(res.status).toBe(200);
    expect(res.headers.authorization).toMatch(
      /^Bearer\s[A-Za-z0-9\-._~+/]+=*$/,
    );
  });

  test('Falha ao tentar login com senha errada', async () => {
    login.password = 'wrongPassword';
    login.email = userData.email;

    const res = await request(app).post(urlSignIn).send(login);
    expect(res.status).toBe(404);
  });

  test('Falha ao tentar login com email inexistente', async () => {
    login.email = 'wrongEmail@email.com';
    login.password = userData.password;

    const res = await request(app).post(urlSignIn).send(login);
    expect(res.status).toBe(404);
  });
});
