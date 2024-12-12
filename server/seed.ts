import mongoose from 'mongoose';
import Category from './src/models/category.model';
import Location from './src/models/location.model';
import Order from './src/models/orders.model';
import Product from './src/models/products.model';
import Subcategory from './src/models/subCategory.model';
import dotenv from 'dotenv';
dotenv.config();

const categories = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'optics',
    description: 'optics with light',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'electronics',
    description: 'electronics and gadgets',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'furniture',
    description: 'high-quality furniture for homes',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'clothing',
    description: 'fashionable and trendy clothing',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'sports',
    description: 'sports gear and equipment',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const locations = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'delhi',
    location_price: 200,
    operator: 'add',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'mumbai',
    location_price: 250,
    operator: 'add',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'bangalore',
    location_price: 300,
    operator: 'add',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'kolkata',
    location_price: 220,
    operator: 'add',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'chennai',
    location_price: 240,
    operator: 'add',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const subcategories = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'sub cat optics',
    description: 'optics with sub cat light',
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 100,
    category: categories[0]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'sub cat furniture',
    description: 'furniture with modern designs',
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 100,
    category: categories[2]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'sub cat electronics',
    description: 'electronic products with advanced features',
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 100,
    category: categories[1]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'sub cat clothing',
    description: 'clothing items for all seasons',
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 50,
    category: categories[3]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'sub cat sports',
    description: 'sports accessories and gear',
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 150,
    category: categories[4]._id,
  },
];

const products = Array.from({ length: 100 }, (_, index) => {
  const categoryIndex = index % categories.length;
  const subcategoryIndex = index % subcategories.length;
  const locationIndex = index % locations.length;

  return {
    _id: new mongoose.Types.ObjectId(),
    name: `Product ${index + 1}`,
    description: `Description for product ${index + 1}`,
    imageUrl: `image-url-${index + 1}`,
    createdAt: new Date(),
    updatedAt: new Date(),
    thumbnail:
      'https://res.cloudinary.com/dpp1v9aek/image/upload/v1733995876/products/wllpnspfxzn9hzdkp63f.jpg',
    images: [
      'https://res.cloudinary.com/dpp1v9aek/image/upload/v1733995876/products/wllpnspfxzn9hzdkp63f.jpg',
      'https://res.cloudinary.com/dpp1v9aek/image/upload/v1733995876/products/g6vbgcayonxfoiuykek4.jpg',
    ],
    product_price: 50 + (index % 10) * 10,
    class: categories[categoryIndex].name,
    category: categories[categoryIndex]._id,
    subCategory: subcategories[subcategoryIndex]._id,
    location: locations[locationIndex]._id,
  };
});

const orders = Array.from({ length: 100 }, (_, index) => {
  const userId = new mongoose.Types.ObjectId();
  const productIds = Array.from(
    { length: 3 },
    () => new mongoose.Types.ObjectId()
  );
  const productQuantities = Array.from(
    { length: 3 },
    () => Math.floor(Math.random() * 5) + 1
  );
  const totalAmount = productIds.reduce(
    (sum, productId, idx) =>
      sum + (50 + (idx % 10) * 10) * productQuantities[idx],
    0
  );

  return {
    _id: new mongoose.Types.ObjectId(),
    user: userId,
    products: productIds.map((productId, idx) => ({
      product_id: productId,
      quantity: productQuantities[idx],
    })),
    isCustomized: Math.random() > 0.5,
    status: index % 2 === 0 ? 'Pending' : 'Shipped',
    shippingAddress: {
      address: `Address ${index + 1}`,
      city: locations[index % locations.length].name,
      postalCode: `${Math.floor(Math.random() * 900000) + 100000}`,
    },
    totalAmount: totalAmount,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

(async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: 'strechable-ceiling',
    });
    console.log('Connected to DB');

    await Category.deleteMany({});
    await Location.deleteMany({});
    await Order.deleteMany({});
    await Product.deleteMany({});
    await Subcategory.deleteMany({});

    // Insert categories first
    await Category.create(categories);
    // Insert subcategories second
    await Subcategory.create(subcategories);
    // Insert locations next
    await Location.create(locations);
    // Insert products last, after subcategories
    await Product.create(products);
    // Insert orders last
    await Order.create(orders);

    console.log('Seeder completed!');
  } catch (err) {
    console.error('Error during seeding:', err);
  } finally {
    mongoose.disconnect();
  }
})();
