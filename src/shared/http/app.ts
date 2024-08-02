import express from 'express';
import cors from 'cors';
import routes from './routes';
import 'dotenv/config';
import swaggerSpec from '@shared/utils/swaggerOptions';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(routes);

export default app;
