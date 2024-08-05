import request from 'supertest';
import app from '../shared/http/app';
import { connectDB, disconnectDB } from '@config/database';
import 'dotenv/config';
import { ObjectId } from 'mongoose';

const urlEvents = '/events';
const urlSignUp = '/users/sign-up';
const urlSignIn = '/users/sign-in';
let eventId: ObjectId;
let token: string;

describe('Testes das rotas de eventos', () => {
  beforeAll(async () => {
    await connectDB();
    await request(app).post(urlSignUp).send(userData);
    const res = await request(app)
      .post(urlSignIn)
      .send({ email: userData.email, password: userData.password });
    token = res.headers.authorization;
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

  const eventData = {
    description: 'string',
    dayOfWeek: 'sunday',
  };

  test('Cria um novo evento', async () => {
    const res = await request(app)
      .post(urlEvents)
      .set('Authorization', token)
      .send(eventData);
    eventId = res.body._id;
    expect(res.status).toBe(201);
    expect(res.body.description).toBe('string');
  });

  test('Retorna todos os eventos', async () => {
    const res = await request(app).get(urlEvents).set('Authorization', token);
    expect(res.status).toBe(200);
  });

  test('Retorna evento por id', async () => {
    const res = await request(app)
      .get(urlEvents + '/' + eventId)
      .set('Authorization', token);
    expect(res.status).toBe(200);
  });

  test('Exclui evento por id', async () => {
    const res = await request(app)
      .delete(urlEvents + '/' + eventId)
      .set('Authorization', token);
    expect(res.status).toBe(204);
  });
});
