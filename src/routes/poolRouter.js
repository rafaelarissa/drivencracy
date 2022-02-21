import express from 'express';
import { setPool, getPool, getChoiceOptions, countVotes } from '../controllers/PoolController.js';
import { poolValidation } from '../middlewares/poolValidationMiddleware.js';

const poolRouter = express.Router();
poolRouter.post('/pool', poolValidation, setPool);
poolRouter.get('/pool', getPool);
poolRouter.get('/pool/:id/choice', getChoiceOptions);
poolRouter.get('/pool/:id/result', countVotes);

export default poolRouter;