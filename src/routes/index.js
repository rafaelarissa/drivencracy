import express from 'express';
import poolRouter from './poolRouter';
import choiceRouter from './choiceRouter';

const router = express.Router();
router.use(poolRouter);
router.use(choiceRouter);

export default router;