import { Router } from 'express';
import Joi from 'joi';
import { container } from 'tsyringe';
import { MovieService } from '../services';
import { catcher, requestValidator } from './middlewares';

const router = Router();
const movieService = container.resolve(MovieService);

router
  .route('/movies')
  .get(async (req, res) => {
    const movies = await movieService.getMovies();
    res.json({ movies });
  })
  .post(
    requestValidator({
      body: {
        title: Joi.string().min(3).required(),
      },
    }),
    async (req, res) => {
      const id = await movieService.createMovie(req.body);
      res.status(201).json({ id });
    }
  );

router.delete(
  '/movies/:id',
  requestValidator({
    params: {
      id: Joi.string().min(3).required(),
    },
  }),
  async (req, res) => {
    await movieService.deleteMovie(req.params.id);
    res.status(204).send();
  }
);

router.post(
  '/movies/:id/identify',
  catcher(async (req, res) => {
    await movieService.identifyMovie(req.params.id, req.query.imdb as string);
    res.status(204).send();
  })
);

export const moviesRoute = router;
