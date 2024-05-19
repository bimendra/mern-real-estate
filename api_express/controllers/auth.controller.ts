import { Request, RequestHandler, Response } from 'express';
import { hash } from 'bcrypt';
import { AuthRequest } from '../types/types';
import prisma from '../lib/prisma';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import type { User } from '@prisma/client';

export const register = async (req: AuthRequest, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const hashedPassword = await hash(
      password,
      Number(process.env.BCRYPT_SALT) || 10
    );
    try {
      await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        },
      });
      return res.status(201).json({ message: 'User creted successfully' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 'error',
        message: 'Failed to process the request. Please try again later.',
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Failed to process the request. Please try again later.',
    });
  }
};

export const login = (req: Request, res: Response, next: any) => {
  passport.authenticate('local', function (err: any, user: any) {
    if (err || !user) {
      return res.status(401).json({
        message: 'Authentication failed',
      });
    }
    req.login(user, function (err) {
      if (err) {
        return next(err);
      }
      const expiresIn = (process.env.JWT_EXPIRES_IN as string) || '1d';
      const signedToken = jwt.sign(
        {
          sub: (req.user as User).id,
          iat: Date.now(),
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: expiresIn,
        }
      );
      return res
        .cookie('token', signedToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
        })
        .status(200)
        .json({
          message: 'Logged in successfully',
        });
    });
  })(req, res, next);
};

export const logout: RequestHandler = (req: Request, res: Response, next) => {
  req.logout(function (error) {
    if (error) {
      return next(error);
    }
    res.clearCookie('token').status(200).json({
      message: 'Logged out successfully',
    });
  });
};
