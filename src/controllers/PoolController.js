import db from "../db.js";
import Joi from "joi";

const poolSchema = Joi.object({
  title: Joi.string().required().trim(),
  expiredAt: Joi.string().required()
})

export async function getPool(req, res) {
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

    res.send(201);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}