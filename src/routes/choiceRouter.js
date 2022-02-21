import express from 'express';
import { setChoice, setVote } from '../controllers/ChoiceController.js';

const choiceRouter = express.Router();
choiceRouter.post('/choice', setChoice);
choiceRouter.post('/choice/:id/vote', setVote)

export default choiceRouter;