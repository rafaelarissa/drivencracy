import db from "../db.js";


export async function setChoice(req, res) {
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