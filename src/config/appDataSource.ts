import { DataSource } from 'typeorm';
import { MovieEntity } from '../repositories/models';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'filminhos',
  synchronize: true,
  logging: true,
  entities: [MovieEntity],
  subscribers: [],
  migrations: [],
});
