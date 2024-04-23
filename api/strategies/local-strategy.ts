import passport from 'passport';
import { Strategy } from 'passport-local';
import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';

export default passport.use(
  new Strategy(async function verify(username: string, password: string, done) {
    console.log(`auth:login with username: ${username}, password: ${password}`);
    try {
      const foundUser = await prisma.user.findUnique({
        where: { username },
      });
      if (!foundUser) {
        throw new Error('User not found');
      }
      if (!(await bcrypt.compare(password, foundUser.password))) {
        throw new Error('Invalid credentials');
      }
      done(null, foundUser);
    } catch (error) {
      done(error, undefined);
    }
  })
);
