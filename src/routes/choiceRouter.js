import express from 'express';
import { setChoice } from '../controllers/ChoiceController.js';

const choiceRouter = express.Router();
choiceRouter.post('/choice', setChoice);

export default choiceRouter;