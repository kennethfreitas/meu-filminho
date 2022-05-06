import { AxiosInstance } from 'axios';
import { Movie, MovieRepository } from '../interfaces';
import { MovieService } from './MovieService';

const MovieRepositoryMock: MovieRepository = {
  findMovies: async (): Promise<Movie[]> => [
    {
      id: '1',
      title: 'batman',
    },
  ],
  createMovie: async (newMovie: Movie): Promise<void> => undefined,
  removeMovie: async (id: string): Promise<void> => undefined,
  updateMovie: async (id: string, changes: Partial<Movie>): Promise<void> => undefined,
};

const RequestMock = {
  get: async (): Promise<any> => ({ data: { Title: 'string', Poster: 'string' } }),
} as any as AxiosInstance;

describe('MovieService Test Suite', () => {
  const movieService = new MovieService(MovieRepositoryMock);
  movieService['request'] = RequestMock;

  afterEach(async () => jest.restoreAllMocks());

  test('Should return a list of movies', async () => {
    const findMoviesSpy = jest.spyOn(MovieRepositoryMock, 'findMovies');
    const [result] = await movieService.getMovies();

    expect(result).toEqual({
      id: '1',
      title: 'batman',
    });
    expect(findMoviesSpy).toHaveBeenCalled();
  });

  test('Should create a movie', async () => {
    const createMovieSpy = jest.spyOn(MovieRepositoryMock, 'createMovie');
    const id = await movieService.createMovie({ title: 'django' });

    expect(id).not.toBeNull();
    expect(createMovieSpy).toBeCalledWith({ id, title: 'django' });
  });

  test('Should delete a movie', async () => {
    const removeMovieSpy = jest.spyOn(MovieRepositoryMock, 'removeMovie');
    await movieService.deleteMovie('1');

    expect(removeMovieSpy).toHaveBeenCalled();
  });

  test('Should identify a movie', async () => {
    const getSpy = jest.spyOn(RequestMock, 'get');
    const updateMovieSpy = jest.spyOn(MovieRepositoryMock, 'updateMovie');
    const result = movieService.identifyMovie('id', 'imdb');

    await expect(result).resolves.not.toThrow();

    expect(getSpy).toHaveBeenCalled();
    expect(updateMovieSpy).toHaveBeenCalled();
  });

  test('Should throw if try to identify a movie that does not exist', async () => {
    const getSpy = jest.spyOn(RequestMock, 'get');
    const updateMovieSpy = jest.spyOn(MovieRepositoryMock, 'updateMovie').mockRejectedValue(new Error());
    const result = movieService.identifyMovie('id', 'imdb');

    await expect(result).rejects.toThrowError();

    expect(getSpy).toHaveBeenCalled();
    expect(updateMovieSpy).toHaveBeenCalled();
  });
});
