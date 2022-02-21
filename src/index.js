import express, {json} from 'express';
import router from './routes/index.js';
import cors from 'cors';

const server = express();

server.use(json());
server.use(router);
server.use(cors());

server.listen(process.env.PORT, () => {
  console.log("Listening on" + process.env.PORT);
});