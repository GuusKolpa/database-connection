import { Client } from 'pg'; // Import the PostgreSQL client from the pg library

const validateEnvVars = (): void => {
  const requiredEnvVars = ['DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_NAME', 'DB_PORT'];
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  });
};

// Function to create and return a PostgreSQL connection
export const connectDB = async (): Promise<Client> => {
  validateEnvVars();
  const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '5432'), // Default PostgreSQL port is 5432
  });

  try {
    await client.connect(); // Connect to the PostgreSQL database
    console.log('Connected to PostgreSQL');

    // Execute a simple query to set the schema (this can be customized based on your needs)
    await client.query('SET search_path TO smashgg_archive');

    // You can run further queries here, for example:
    // const res = await client.query('SELECT NOW()');
    // console.log('Current time:', res.rows[0]);

    return client; // Return the client to be used for further queries
  } catch (error) {
    console.error('Database connection failed:', (error as Error).message);
    throw new Error(
      `Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
