import { model, Schema } from 'mongoose';
import { Movie } from '../../interfaces';

const movieSchema = new Schema<Movie>(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    poster: String,
    priority: String,
  },
  {
    toObject: {
      virtuals: true,
      transform: function (doc, ret) {
        const { _id, __v, ...obj } = ret;
        return obj;
      },
    },
  }
);

export const movieModel = model<Movie>('movies', movieSchema);
