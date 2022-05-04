import express from 'express';
import { moviesRoute } from './routes';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(new Date(), req.url);
  next();
});

app.use('/api', moviesRoute);

app.listen(666, () => console.log('Running'));
