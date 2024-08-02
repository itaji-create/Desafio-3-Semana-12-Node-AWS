import mongoose from 'mongoose';

type Environment = 'prod' | 'production' | 'dev' | 'development' | 'test';

const environment: Environment = (process.env.NODE_ENV || 'dev') as Environment;

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
      : `mongodb://127.0.0.1:27017/database-dev`;
    await mongoose.connect(uri, {});
  } catch (error) {
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};

export { connectDB, disconnectDB };
