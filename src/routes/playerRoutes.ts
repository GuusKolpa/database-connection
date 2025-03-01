import { Router } from 'express';
import { getPlayers } from '../controllers/playerController';

const router = Router();

router.get('/players', getPlayers);

export default router;