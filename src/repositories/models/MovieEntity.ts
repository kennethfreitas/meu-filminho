import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Movie, Priority } from '../../interfaces';

@Entity()
export class MovieEntity implements Movie {
  @PrimaryColumn()
  id!: string;

  @Column()
  title!: string;

  @Column({ nullable: true })
  poster!: string;

  @Column({ nullable: true })
  priority?: Priority;
}
