import Joi from "joi";
import db from "../db.js";
import { ObjectId } from "mongodb";

const choiceSchema = Joi.object({
  title: Joi.string().required().trim(),
  poolId: Joi.required()
})

export async function setChoice(req, res) {
  const validation = choiceSchema.validate(req.body);

  if(validation.error) {
    res.sendStatus(422);
    return
  }

  const choice = {
    title: req.body.title,
    poolId: req.body.poolId
  }

  try {
    const searchPool = await db.collection('pool').findOne({ _id: new ObjectId(choice.poolId) });

    if(!searchPool) {
      return res.status(404).send('Enquete não existente');
    }

    const searchChoice = await db.collection('choice').findOne({ title: choice.title });

    if(searchChoice) {
      return res.status(409).send('Opção de voto já existente');
    }

    await db.collection('choice').insertOne(choice);

    res.sendStatus(201);
  } catch(error){
    res.status(500).send(error.message);
  }
}