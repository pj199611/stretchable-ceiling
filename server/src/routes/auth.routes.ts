import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
const router = Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

export default router;
