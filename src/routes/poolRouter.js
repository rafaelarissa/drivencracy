import express from 'express';
import { getPool } from '../controllers/PoolController.js';

const poolRouter = express.Router();
poolRouter.post('/pool', getPool);

export default poolRouter;