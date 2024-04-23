import { Request, Response } from 'express';
import bcrypt, { hash } from 'bcrypt';
import { AuthRequest } from '../types/types';
import prisma from '../lib/prisma';

export const register = async (req: AuthRequest, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
  return res.json(newUser);
};

export const login = (req: Request, res: Response) => {};

export const logout = (req: Request, res: Response) => {};
