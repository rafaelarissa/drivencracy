import express from 'express';
import poolRouter from './poolRouter.js';
import choiceRouter from './choiceRouter.js';

const router = express.Router();
router.use(poolRouter);
router.use(choiceRouter);

export default router;