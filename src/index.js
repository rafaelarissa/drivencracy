import dotenv from 'dotenv';
import express, {json} from 'express';
import router from './routes/index.js';
import cors from 'cors';

dotenv.config();
const server = express();

server.use(json());
server.use(router);
server.use(cors());

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});