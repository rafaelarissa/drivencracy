import express from 'express';
import router from './routes';

const server = express();

server.use(router);

server.listen(5000, () => {
  console.log("Listening on 5000")
})