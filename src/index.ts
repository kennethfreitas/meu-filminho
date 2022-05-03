import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(new Date(), req.url);
  next();
});

app.get('/cool', (req, res) => {
  res.json({ nice: true });
});

// lição de casa
// criar um endpoint /movies que retorna uma lista de filmes

app.listen(666, () => console.log('Running'));
