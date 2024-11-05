import mongoose from 'mongoose';
import IProduct from '../interfaces/IProduct';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: false,
  },
  width: {
    type: Number,
    required:false
  },
  height: {
    type: Number,
    required:false
  },
  area: {
    type: Number,
    required:false
  },
  shape: {
    type: String,
    enum: ['Rectangle','Square'],
    default: 'Rectangle',
  },
  customShape:{
    type:String,
    required:false
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
  stock: {
    type: Number,
    required: false,
    min: 0,
  },
  imageUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product= mongoose.model<IProduct>('Product', productSchema);
export default Product;
