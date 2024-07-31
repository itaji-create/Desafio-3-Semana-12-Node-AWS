import request from 'supertest';
import app from '../shared/http/app';

describe('GET /', () => {
  it('Deve retornar "Hello, World" com status code 200, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
