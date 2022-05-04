import { Movie, MovieRepository } from '../interfaces';
import { movieService } from './MovieService';

const MovieRepositoryMock: MovieRepository = {
  findMovies: async (): Promise<Movie[]> => [
    {
      id: '1',
      title: 'batman',
    },
  ],
  createMovie: async (newMovie: Movie): Promise<void> => undefined,
};

describe('MovieService Test Suite', () => {
  movieService['movieRepository'] = MovieRepositoryMock;

  test('Should return a list of movies', async () => {
    const findMoviesSpy = jest.spyOn(MovieRepositoryMock, 'findMovies');
    const [result] = await movieService.getMovies();

    expect(result).toEqual({
      id: '1',
      title: 'batman',
    });
    expect(findMoviesSpy).toHaveBeenCalled();
  });

  test.skip('Shoud create a movie', async () => {
    const createMovieSpy = jest.spyOn(MovieRepositoryMock, 'createMovie');
    const id = await movieService.createMovie({ title: 'django' });

    expect(id).not.toBeNull();
    expect(createMovieSpy).toBeCalledWith({ id, title: 'django' });
  });
});
