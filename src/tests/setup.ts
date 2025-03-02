import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: '.env/.env.development' });


// Verify environment variables are loaded
const requiredEnvVars = ['DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_NAME', 'DB_PORT'];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable for tests: ${varName}`);
  }
});