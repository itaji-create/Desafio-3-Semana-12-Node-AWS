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

/**
 * @openapi
 * /users/generate-upload-url:
 *   get:
 *     summary: Generate a pre-signed URL for uploading a file to S3
 *     description: Generates a pre-signed URL that allows uploading a file to an S3 bucket.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: fileName
 *         in: query
 *         description: The name of the file to be uploaded.
 *         required: true
 *         schema:
 *           type: string
 *       - name: fileType
 *         in: query
 *         description: The MIME type of the file to be uploaded.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response with the pre-signed URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uploadUrl:
 *                   type: string
 *                   format: uri
 *                   description: The pre-signed URL for uploading the file to S3.
 *       '400':
 *         description: Bad request due to missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'File name and file type are required.'
 *       '500':
 *         description: Internal server error when generating the signed URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Error generating signed URL.'
 */

export default router;
