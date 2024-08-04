import { connectDB } from '@config/database';
import app from './app';

connectDB();

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Api rodando na porta ${port}`);
