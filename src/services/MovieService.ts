import axios from 'axios';
import { randomUUID } from 'crypto';
import { inject, injectable } from 'tsyringe';
import { DI_REPOSITORY } from '../config';
import { Movie, MovieRepository } from '../interfaces';
import { movieJsonRepository, MovieMongoRepository } from '../repositories';

type ID = string;

interface IdentifyReponse {
  Title: string;
  Poster: string;
}

@injectable()
export class MovieService {
  // private movieRepository = movieJsonRepository;
  // private movieRepository = movieMongoRepository;
  private request = axios.create({
    baseURL: 'https://www.omdbapi.com/',
    params: { apikey: process.env.OMDB_KEY! },
  });

  constructor(@inject(DI_REPOSITORY) private movieRepository: MovieRepository) {}

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
