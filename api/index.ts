import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import 'dotenv/config';
import postRouter from './routes/post.route';
import authtRouter from './routes/auth.route';
import './strategies/local-strategy';
import './strategies/jwt-strategy';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user: any, done) {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/posts', postRouter);
app.use('/api/auth', authtRouter);

const port = process.env.PORT || '3030';
app.listen(port, function () {
  console.log(`API started at http://localhost:${port}/api`);
});

app.get('/api', async (req: Request, res: Response) => {
  return res.json({
    message: 'Hello World',
  });
});
