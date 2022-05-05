import axios from 'axios';
import { randomUUID } from 'crypto';
import { Movie } from '../interfaces';
import { movieRepository } from '../repositories';

type ID = string;

interface IdentifyReponse {
  Title: string;
  Poster: string;
}

class MovieService {
  private movieRepository = movieRepository;
  private request = axios.create({
    baseURL: 'https://www.omdbapi.com/',
    params: { apikey: process.env.OMDB_KEY! },
  });

  async getMovies(): Promise<Movie[]> {
    return this.movieRepository.findMovies();
  }

  async createMovie(newMovie: Omit<Movie, 'id'>): Promise<ID> {
    const id = randomUUID();
    await this.movieRepository.createMovie({ id, ...newMovie });
    return id;
  }

  async deleteMovie(id: ID): Promise<void> {
    await this.movieRepository.removeMovie(id);
  }

  async identifyMovie(id: ID, imdbCode: string): Promise<void> {
    const { data: movieDetails } = await this.request.get<IdentifyReponse>('', { params: { i: imdbCode } });
    await this.movieRepository.updateMovie(id, { title: movieDetails.Title, poster: movieDetails.Poster });
  }
}

export const movieService = new MovieService();
