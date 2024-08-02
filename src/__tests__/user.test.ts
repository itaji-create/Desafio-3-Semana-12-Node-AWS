import request from 'supertest';
import app from '../shared/http/app';
import { connectDB, disconnectDB } from '@config/database';
import 'dotenv/config';

describe('Testes da rota de usuários', () => {
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
});
