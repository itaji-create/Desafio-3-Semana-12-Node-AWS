import request from 'supertest';
import app from '../shared/http/app';

test('Criar um novo usuário', async () => {
  const res = await request(app).post('/v1/users/sign-up').send({
    firstName: 'string',
    lastName: 'string',
    birthDate: '2024-08-01',
    city: 'string',
    country: 'string',
    email: 'email@test.com',
    password: 'string',
    confirmPassword: 'string',
  });
  expect(res.status).toBe(201);
  expect(res.body.firstName).toBe('string');
});
