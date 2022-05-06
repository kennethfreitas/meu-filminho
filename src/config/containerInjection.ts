import { container } from 'tsyringe';
import { MovieMongoRepository, MovieSqlRepository } from '../repositories';
import { DI_REPOSITORY } from './containerName';

export function containerInjection(): void {
  container.register(DI_REPOSITORY, {
    // useClass: MovieMongoRepository,
    useClass: MovieSqlRepository,
  });
}
