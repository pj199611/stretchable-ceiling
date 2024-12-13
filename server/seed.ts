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

// More subcategories per category to ensure diversity
const subcategories = [
  // Optics Subcategories
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'optical lenses',
    description: 'various types of optical lenses',
    price: 100,
    category: categories[0]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'light equipment',
    description: 'equipment for optical lighting',
    price: 120,
    category: categories[0]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Electronics Subcategories
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'smartphones',
    description: 'advanced smartphones with cutting-edge features',
    price: 500,
    category: categories[1]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'laptops',
    description: 'powerful laptops for work and play',
    price: 800,
    category: categories[1]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Furniture Subcategories
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'living room furniture',
    description: 'furniture for the living room',
    price: 300,
    category: categories[2]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'bedroom furniture',
    description: 'furniture for the bedroom',
    price: 350,
    category: categories[2]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Clothing Subcategories
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'men\'s clothing',
    description: 'clothing for men',
    price: 50,
    category: categories[3]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'women\'s clothing',
    description: 'clothing for women',
    price: 60,
    category: categories[3]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Sports Subcategories
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'sports apparel',
    description: 'apparel for various sports',
    price: 40,
    category: categories[4]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'sports accessories',
    description: 'accessories for sports activities',
    price: 70,
    category: categories[4]._id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Locations array
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

// Generate random products
const products = Array.from({ length: 100 }, (_, index) => {
  const categoryIndex = Math.floor(Math.random() * categories.length); // Random category
  const subcategoryIndex = Math.floor(Math.random() * subcategories.length); // Random subcategory
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
    class: categories[categoryIndex].name, // Random class based on category
    category: categories[categoryIndex]._id,
    subCategory: subcategories[subcategoryIndex]._id, // Random subcategory based on category
    location: locations[locationIndex]._id,
  };
});

// Orders array
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

// Seeder execution
(async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: 'strechable-ceiling',
    });
    console.log('Connected to DB');

    // Clear previous data
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
