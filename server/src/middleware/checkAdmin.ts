import { Request, Response, NextFunction } from 'express';
import { IRequest } from '../interfaces/IReq';

export const checkAdminRole = async (
  req: IRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = req.user;

  if (!user || (user.role !== 'admin' && user.role !== 'super admin')) {
    res.status(403).json({ message: 'Access denied.' });
    return;
  }

  next();
};
