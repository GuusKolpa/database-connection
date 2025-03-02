import { Router } from 'express';
import userRoutes from './playerRoutes'; // Import user routes

const router = Router();

// Use the user routes
router.use('/api', userRoutes);
router.get('/', (req, res) => {
  res.send('Hello from the routes!');
});

export default router;
