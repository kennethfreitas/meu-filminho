import { Movie, MovieRepository } from '../interfaces';
import { movieModel } from './models';

export class MovieMongoRepository implements MovieRepository {
  async findMovies(): Promise<Movie[]> {
    const movies = await movieModel.find();
    return movies.map(movie => movie.toObject());
  }

  async createMovie(newMovie: Movie): Promise<void> {
    await movieModel.create(newMovie);
  }

  async removeMovie(id: string): Promise<void> {
    await movieModel.findOneAndRemove({ id });
  }

  async updateMovie(id: string, changes: Partial<Movie>): Promise<void> {
    await movieModel.findOneAndUpdate({ id }, changes);
  }
}
