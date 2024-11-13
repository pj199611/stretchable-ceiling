import { Document } from 'mongoose';

export default interface ILocation extends Document {
    name:string;
    location_price:number
}
