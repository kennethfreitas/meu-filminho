import express from 'express';
import { moviesRoute } from './routes';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(new Date(), req.url);
  next();
});

app.use('/api', moviesRoute);

// @ts-ignore
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json(err);
});

app.all('*', (req, res) => res.status(404).json({ error: 'Not found' }));

export const server = app;
