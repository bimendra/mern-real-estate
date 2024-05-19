import { Router, Request, Response } from 'express';

const router = Router();

router.get('/properties', (req: Request, res: Response) => {
  return res.json({
    message: 'From properties route',
  });
});

export default router;
