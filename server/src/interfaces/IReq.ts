import { Request } from 'express';
import IUser from '../interfaces/IUser';

export interface IRequest extends Request {
  user?: IUser | null;
}
