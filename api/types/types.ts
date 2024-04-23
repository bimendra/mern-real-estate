import { Request } from 'express';

export type AuthRequest = Request & {
  body: { username: string; email: string; password: string };
};
