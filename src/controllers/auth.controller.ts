import { NextFunction, Request, Response } from 'express';

// Services
import authService from '../services/auth.service';

// Controller
export default {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const response = await authService.login({ email, password });

      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  },

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const response = await authService.register({ email, password });

      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  },
};
