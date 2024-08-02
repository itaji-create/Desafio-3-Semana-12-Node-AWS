import { connectDB } from '@config/database';
import app from './app';

connectDB();

const port = 3001;
app.listen(port);
console.log(`Api rodando na porta ${port}`);
