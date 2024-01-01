import dotenv from 'dotenv';

dotenv.config();

const dbConnectionString = process.env.MONGO_URL as string;
if (!dbConnectionString) {
  throw new Error('MONGO_URL is not set in .env file');
}

export const dbConfig = {
  connectionString: dbConnectionString,
};