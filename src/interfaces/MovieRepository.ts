import { Movie } from './Movie';

export interface MovieRepository {
  findMovies(): Promise<Movie[]>;
  createMovie(newMovie: Movie): Promise<void>;
  removeMovie(id: string): Promise<void>;
  updateMovie(id: string, changes: Partial<Movie>): Promise<void>;
}
