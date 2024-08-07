import request from 'supertest';
import express from 'express';
import { s3 } from '@config/config';
import uploadRouter from '@modules/user/routes/upload';

const app = express();
app.use(uploadRouter);

describe('GET /generate-upload-url', () => {
  it('deve retornar um URL assinada para enviar uma imagem', async () => {
    const response = await request(app)
      .get('/generate-upload-url')
      .query({ fileName: 'test-image.png', fileType: 'image/png' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('uploadUrl');
    expect(typeof response.body.uploadUrl).toBe('string');
    expect(response.body.uploadUrl).toContain('https://');
    expect(response.body.uploadUrl).toMatch(/AWSAccessKeyId/);
    expect(response.body.uploadUrl).toMatch(/Signature/);
    expect(response.body.uploadUrl).toMatch(/x-amz-security-token/);
  });

  it('deve retornar 400 se fileName ou fileType estiverem faltando', async () => {
    const response = await request(app)
      .get('/generate-upload-url')
      .query({ fileName: 'test-image.png' });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      'message',
      'File name and file type are required.',
    );
  });

  it('deve retornar 500 se houver um erro ao gerar o URL assinado', async () => {
    const originalGetSignedUrlPromise = s3.getSignedUrlPromise;
    s3.getSignedUrlPromise = jest
      .fn()
      .mockRejectedValue(new Error('Test error'));

    const response = await request(app)
      .get('/generate-upload-url')
      .query({ fileName: 'test-image.png', fileType: 'image/png' });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty(
      'message',
      'Error generating signed URL.',
    );

    s3.getSignedUrlPromise = originalGetSignedUrlPromise;
  });
});
