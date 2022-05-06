import 'dotenv/config';
import 'reflect-metadata';
import { AppDataSource, containerInjection } from './config';

containerInjection();

// import mongoose from 'mongoose';
import { server } from './app';

async function bootstrap(): Promise<void> {
  // await mongoose.connect(process.env.DATABASE_URI!);
  await AppDataSource.initialize();
  console.log('Database connected');

  server.listen(process.env.PORT, () => console.log('Server running'));
}

bootstrap();
