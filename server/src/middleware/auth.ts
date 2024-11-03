import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IRequest } from '../interfaces/IReq';
const SECRET_KEY = process.env.JWT_SECRET!;

export const authenticateToken = async (
  req: IRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access denied. No token provided.' });
    return;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded as { role: string }; // Attach user data to req
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
