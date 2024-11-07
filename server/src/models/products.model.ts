import mongoose from 'mongoose';
import IProduct from '../interfaces/IProduct';

const productSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: false,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
  }
},{timestamps:true});

const Product= mongoose.model<IProduct>('Product', productSchema);
export default Product;
