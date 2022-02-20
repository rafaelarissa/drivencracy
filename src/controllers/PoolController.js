import db from "../db.js";
import Joi from "joi";
import { ObjectId } from "bson";

const poolSchema = Joi.object({
  title: Joi.string().required().trim(),
  expiredAt: Joi.string().required()
})

export async function setPool(req, res) {
   const validation = poolSchema.validate(req.body);

  if(validation.error) {
    res.status(422).send('Campo title não pode ser vazio');
    return
  }

  const pool = {
    title: req.body.title,
    expiredAt: req.body.expiredAt
  }

  try{
    await db.collection('pool').insertOne(pool);

    res.sendStatus(201);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getPool(req, res) {
  try {
    const pool = await db.collection('pool').find().toArray();

    res.send(pool);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getChoiceOptions(req, res) {
  const id = req.params.id;

  try {
    const listChoice = await db.collection('choice').find({ poolId: id }).toArray();

    if(!listChoice) {
      return res.status(404).send('Enquete não encontrada');
    }

    res.send(listChoice);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}