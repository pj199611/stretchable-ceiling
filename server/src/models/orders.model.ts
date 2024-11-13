import mongoose from 'mongoose';
import IOrder from '../interfaces/IOrder';
import SubCategory from './subCategory.model';
import Product from './products.model';

const orderSchema = new mongoose.Schema<IOrder>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: false,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        // not required for now
        // width: {
        //   type: Number,
        //   required: false,
        // },
        // height: {
        //   type: Number,
        //   required: false,
        // },
        area: {
          type: Number,
          required: false,
        },
        // not required for now
        // shape: {
        //   type: String,
        //   enum: ['Rectangle', 'Square'],
        //   required: false,
        // },
        // customShape: {
        //   type: String,
        //   required: false,
        // },
        stockPhotoIds: [
          {
            type: Number,
            required: false,
          },
        ],
        imageUrls: [{ type: String, required: false }],
      },
    ],
    isCustomized: {
      type: Boolean,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: false,
    },
    remarks: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ['Pending', 'Processed', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    shippingAddress: {
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },
  },
  { timestamps: true }
);

orderSchema.pre('save', async function (next) {
  if (
    this.products[0].stockPhotoIds.length > 0 ||
    this.products[0].imageUrls.length > 0
  ) {
    this.isCustomized = true;
    return;
  }
  this.isCustomized = false;

  next();
});

orderSchema.methods.calculateTotalAmount = async function (location: {
  operator: string;
  price: number;
}) {
  let totalAmount = 0;

  for (const item of this.products) {
    let productPrice;

    // Fetch product details
    const product = await Product.findById(item.product).lean();
    if (product && product.product_price) {
      productPrice = product.product_price;
    } else {
      // Fallback to subcategory price if product price is unavailable
      const subCategory = await SubCategory.findById(
        product.subCategory
      ).lean();
      productPrice = subCategory ? subCategory.price : 0; // Adjust `price` field as per your schema
    }

    const area = item.area 

    // Calculate amount for this item and add to total

    if (location.operator === 'add') {
      totalAmount += area * (productPrice + location.price);
    }

    if (location.operator === 'subtract') {
      totalAmount += area * (productPrice - location.price);
    }
  }

  this.totalAmount = totalAmount;
  return this.totalAmount;
};

const Order = mongoose.model<IOrder>('Order', orderSchema);
export default Order;
