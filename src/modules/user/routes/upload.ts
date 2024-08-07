import { s3 } from '@config/config';
import AppError from '@shared/errors/AppError';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/generate-upload-url', async (req: Request, res: Response) => {
  const { fileName, fileType } = req.query;

  if (typeof fileName !== 'string' || typeof fileType !== 'string') {
    return res
      .status(400)
      .send(
        new AppError(
          'File name and file type are required.',
          400,
          'Bad Request',
        ),
      );
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `images/${fileName}`,
    Expires: 120,
    ContentType: fileType,
  };

  try {
    const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
    res.json({ uploadUrl });
  } catch (error) {
    res
      .status(500)
      .send(
        new AppError(
          'Error generating signed URL.',
          500,
          'Internal Server Error',
        ),
      );
  }
});

export default router;
