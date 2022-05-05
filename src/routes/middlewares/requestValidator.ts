import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

interface SchemaValidation {
  body?: any;
  query?: any;
  params?: any;
}

export function requestValidator(schema: SchemaValidation) {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors = [];

    for (let key of Object.keys(schema)) {
      const propError = Joi.object((schema as any)[key]).validate((req as any)[key]).error;
      if (propError) errors.push(propError);
    }

    if (errors.length) {
      res.status(400).json({ errors });
      return;
    }

    next();
  };
}
