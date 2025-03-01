import { Request, Response } from 'express';
import { connectDB } from '../database';

export const getPlayers = async (req: Request, res: Response) => {
  const pool = await connectDB();
  try {
    const result = await pool.query('SELECT * FROM sgg."Videogame"');
    res.json(result.rows);
  } catch (error: unknown) {
    console.error('Error fetching players:', (error as Error).message);  // Log the error for debugging
    res.status(500).send('Error fetching players');
  } finally {
    await pool.end();  // Close the connection to the pool when done
  }
};
