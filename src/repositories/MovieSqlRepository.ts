import { AppDataSource } from '../config';
import { Movie, MovieRepository } from '../interfaces';
import { MovieEntity } from './models';

export class MovieSqlRepository implements MovieRepository {
  private repository = AppDataSource.getRepository(MovieEntity);

  async findMovies(): Promise<Movie[]> {
    return this.repository.find();
  }
  async createMovie(newMovie: Movie): Promise<void> {
    await this.repository.save(newMovie);
  }
  async removeMovie(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
  async updateMovie(id: string, changes: Partial<Movie>): Promise<void> {
    await this.repository.update({ id }, changes);
  }
}
