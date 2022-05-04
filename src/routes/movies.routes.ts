import { Router } from 'express';
import { movieService } from '../services';

const router = Router();

router
  .route('/movies')
  .get(async (req, res) => {
    const movies = await movieService.getMovies();
    res.json({ movies });
  })
  .post(async (req, res) => {
    const id = await movieService.createMovie(req.body);
    res.status(201).json({ id });
  });

// lição de casa, um endpoint para deletar um filme

export const moviesRoute = router;
