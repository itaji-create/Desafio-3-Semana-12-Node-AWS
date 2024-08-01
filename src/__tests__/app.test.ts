import request from 'supertest';
import app from '../shared/http/app';

describe('GET /', () => {
  it('Deve retornar "Hello Dev" com status code 200, World!', async () => {
    const response = await request(app).get('/v1');
    expect(response.status).toBe(200);
    expect(response.text).toBe('{"message":"Hello Dev!"}');
  });
});
