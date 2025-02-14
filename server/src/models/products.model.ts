import mongoose from 'mongoose';
import IProduct from '../interfaces/IProduct';

const productSchema = new mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: false,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    imageUrls: {
      type: [String], 
      required: true,
    },
    product_price:{
      type:Number,
      required:false
    },
    class:{
      type:String,
      required:true
    },
    images: {
      type: [String], 
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;
