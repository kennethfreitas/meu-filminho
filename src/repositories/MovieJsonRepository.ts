import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import { Movie, MovieRepository } from '../interfaces';

const DB_PATH = path.resolve(process.cwd(), 'db.json');

class MovieJsonRepository implements MovieRepository {
  async createMovie(newMovie: Movie): Promise<void> {
    const movies = await this.findMovies();
    movies.push(newMovie);
    await writeFile(DB_PATH, JSON.stringify(movies));
  }
  async findMovies(): Promise<Movie[]> {
    const data = await readFile(DB_PATH);
    return JSON.parse(data.toString() || '[]');
  }
}

export const movieRepository = new MovieJsonRepository();
