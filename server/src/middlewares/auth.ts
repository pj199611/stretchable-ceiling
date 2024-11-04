import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IRequest } from '../interfaces/IReq';
import User from '../models/user.model';

export const authenticateToken = async (
  req: IRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.header('authorization')?.split(' ')[1];
  const SECRET_KEY = process.env.JWT_SECRET!;

  if (!token) {
    res.status(401).json({ message: 'Access denied. No token provided.' });
    return;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as unknown as any;
    const user = await User.findById(decoded.userId);
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
