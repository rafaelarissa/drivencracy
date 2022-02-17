import express from 'express';
import { setPool, getPool } from '../controllers/PoolController.js';

const poolRouter = express.Router();
poolRouter.post('/pool', setPool);
poolRouter.get('/pool', getPool);

export default poolRouter;