import { Request, RequestHandler, Response } from 'express';
import { AuthRequest } from '../types/types';
export declare const register: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const login: (req: Request, res: Response, next: any) => void;
export declare const logout: RequestHandler;
