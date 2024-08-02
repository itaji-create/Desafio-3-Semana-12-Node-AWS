import request from 'supertest';
import app from '../shared/http/app';
import { connectDB, disconnectDB } from '@config/database';
import 'dotenv/config';

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
    const res = await request(app).post('/v1/users/sign-up').send(userData);
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe('string');
  });

  test('Falha ao tentar criar usuário com email já existente no db', async () => {
    const res2 = await request(app).post('/v1/users/sign-up').send(userData);
    expect(res2.status).toBe(400);
  });

  test('Cria usuário com um novo email', async () => {
    userData.email = 'email.teste@gmail.com';
    const res2 = await request(app).post('/v1/users/sign-up').send(userData);
    expect(res2.status).toBe(201);
  });

  test('Falha ao tentar criar usuário com senha divergente da confimação de senha', async () => {
    userData.email = 'email.teste3@gmail.com';
    userData.confirmPassword = 'anotherPassword';
    const res2 = await request(app).post('/v1/users/sign-up').send(userData);
    expect(res2.status).toBe(400);
  });
});

describe('Testes da rota de login dos usuários', () => {
  beforeAll(async () => {
    await connectDB();
    await request(app).post('/v1/users/sign-up').send(userData);
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

  test('Faz login em um novo usuário', async () => {
    const user = {
      email: userData.email,
      password: userData.password,
    };
    const res = await request(app).post('/v1/users/sign-in').send(user);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe('string');
  });

  test('Falha ao tentar login com senha errada', async () => {
    const user = {
      email: userData.email,
      password: 'wrongPassword',
    };
    const res = await request(app).post('/v1/users/sign-in').send(user);
    expect(res.status).toBe(400);
  });

  test('Falha ao tentar login com email inexistente', async () => {
    const user = {
      email: 'wrongEmail@gmail.com',
      password: 'string',
    };
    const res = await request(app).post('/v1/users/sign-in').send(user);
    expect(res.status).toBe(400);
  });
});
