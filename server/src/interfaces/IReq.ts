import { Request } from 'express';
import IUser from './Iuser';

export interface IRequest extends Request {
  user?: IUser | null;
}
