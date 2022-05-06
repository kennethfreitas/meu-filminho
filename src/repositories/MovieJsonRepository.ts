import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import { Movie, MovieRepository } from '../interfaces';

const DB_PATH = path.resolve(process.cwd(), 'db.json');

class MovieJsonRepository implements MovieRepository {
  async updateMovie(id: string, changes: Partial<Movie>): Promise<void> {
    const movies = await this.findMovies();
    const movieIndex = movies.findIndex(movie => movie.id === id);

    if (movieIndex < 0) throw new Error(`Movie with ID: ${id}, does not exist.`);

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...changes,
      id,
    };
    await this.save(movies);
  }

  async createMovie(newMovie: Movie): Promise<void> {
    const movies = await this.findMovies();
    movies.push(newMovie);
    await this.save(movies);
  }

  async findMovies(): Promise<Movie[]> {
    const data = await readFile(DB_PATH);
    return JSON.parse(data.toString() || '[]');
  }

  async removeMovie(id: string): Promise<void> {
    const movies = await this.findMovies();
    const cleanMovies = movies.filter(movie => movie.id !== id);
    await this.save(cleanMovies);
  }

  private async save(movies: Movie[]): Promise<void> {
    await writeFile(DB_PATH, JSON.stringify(movies));
  }
}

export const movieJsonRepository = new MovieJsonRepository() as MovieRepository;
