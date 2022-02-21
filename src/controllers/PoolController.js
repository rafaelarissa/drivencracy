import db from "../db.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";

export async function setPool(req, res) {

  const pool = {
    title: req.body.title,
    expiredAt: req.body.expiredAt
  }

  if(pool.expiredAt === '') {
    pool.expiredAt = dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm')
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

    if(listChoice.length === 0) {
      return res.status(404).send('Enquete não encontrada');
    }

    res.send(listChoice);
  } catch(error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

export async function countVotes(req, res) {
  const id = req.params.id;

  try {
    const choice = await db.collection('choice').find({ poolId: id }).toArray();
    const vote = await db.collection('vote').find({ }).toArray();
    const counter = [];
    let position;
    
    for(let i = 0; i < choice.length; i++){
      counter.push(0);
    }

    for(let i = 0; i < choice.length; i++) {
      for(let j = 0; j < vote.length; j++) {
        if(choice[i]._id == (new ObjectId(vote[j].choiceId).toString())) {
          counter[i]++;  
          position = i;
        }
      }
    }

    const pool = await db.collection('pool').findOne({ _id: new ObjectId(id) });

    res.send({
      ...pool,
      result: {
        title: choice[position].title,
        votes: Math.max(...counter) 
      }
    })    
  } catch(error) {
    console.log(error);
    res.status(500).send(error.message);
    }
}