import { randomUUID } from 'crypto';
import { Movie } from '../interfaces';
import { movieRepository } from '../repositories';

type ID = string;

class MovieService {
  private movieRepository = movieRepository;

  async getMovies(): Promise<Movie[]> {
    return this.movieRepository.findMovies();
  }

  async createMovie(newMovie: Omit<Movie, 'id'>): Promise<ID> {
    const id = randomUUID();
    await this.movieRepository.createMovie({ id, ...newMovie });
    return id;
  }
}

export const movieService = new MovieService();
