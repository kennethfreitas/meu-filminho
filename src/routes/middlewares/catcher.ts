import { NextFunction, Request, Response } from 'express';

export const catcher =
  (fn: (req: Request, res: Response, next?: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next?: NextFunction) =>
    fn(req, res, next).catch(next);
