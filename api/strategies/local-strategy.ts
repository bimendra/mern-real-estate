import passport from 'passport';
import * as passportLocal from 'passport-local';
import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';

export default passport.use(
  new passportLocal.Strategy(
    {
      usernameField: 'email',
    },
    async function verify(email: string, password: string, done) {
      try {
        const foundUser = await prisma.user.findUnique({
          where: { email },
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
    }
  )
);
