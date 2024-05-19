import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import prisma from '../lib/prisma';

export default passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET as string,
    },
    async (jwt_payload, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: {
            id: jwt_payload.sub,
          },
        });
        if (user) {
          return done(null, user);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);
