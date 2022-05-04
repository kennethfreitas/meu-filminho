import { Movie } from './Movie';

export interface MovieRepository {
  findMovies(): Promise<Movie[]>;
  createMovie(newMovie: Movie): Promise<void>;
}
