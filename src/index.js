import express, {json} from 'express';
import router from './routes/index.js';

const server = express();

server.use(router);
server.use(json());

server.listen(5000, () => {
  console.log("Listening on 5000")
})