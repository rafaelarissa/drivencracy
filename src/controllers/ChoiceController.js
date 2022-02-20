import Joi from "joi";
import db from "../db.js";

const choiceSchema = Joi.object({
  title: Joi.string().required().trim(),
  poolId: Joi.number().required()
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
    await db.collection('choice').insertOne(choice);

    res.sendStatus(201);
  } catch(error){
    res.sendStatus(500);
  }
}