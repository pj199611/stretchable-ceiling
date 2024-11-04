import { Request } from 'express';
import IUser from '../interfaces/Iuser';

export interface IRequest extends Request {
  user?: IUser | null;
}
