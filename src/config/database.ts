import mongoose from 'mongoose';

type Environment = 'prod' | 'production' | 'dev' | 'development' | 'test';

const environment: Environment = (
  process.env.NODE_ENV || 'test'
).toLowerCase() as Environment;

const suffix: Record<Environment, string> = {
  prod: '',
  production: '',
  dev: '-dev',
  development: '-dev',
  test: '-test',
};

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI
      ? `${process.env.MONGODB_URI}${suffix[environment]}`
      : `mongodb://127.0.0.1:27017/database_test`;
    await mongoose.connect(uri, {});
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
