import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import postRouter from './routes/post.route';
import authtRouter from './routes/post.route';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use('/api/posts', postRouter);
app.use('/api/auth', authtRouter);

const port = process.env.PORT || '3030';
app.listen(port, function () {
  console.log(`API started at http://localhost:${port}`);
});

app.get('/api', async (req: Request, res: Response) => {
  return res.json({
    message: 'Hello World',
  });
});
