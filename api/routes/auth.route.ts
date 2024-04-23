import passport from 'passport';
import { Router } from 'express';
import { register, login, logout } from '../controllers/auth.controller';

const router = Router();

router.post('/register', register);
router.post('/login', passport.authenticate('local'), login);
router.post('/logout', logout);

export default router;
