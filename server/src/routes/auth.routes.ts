import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
import { loginValidation, signupValidation } from '../validators/authValidator';
import { validateRequest } from '../validators/validation.request';
const router = Router();

router.post('/login',loginValidation,validateRequest, AuthController.login);
router.post('/signup',signupValidation,validateRequest, AuthController.signup);

export default router;
