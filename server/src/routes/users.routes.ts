import express from 'express';
import {
  getUser,
  updateUser,
  getSubCategories,
  getCategories,
  getCategoryById,
  getSubCategoriesByCategoryId
} from '../controllers/admin.controller';
import {
  getAllProducts,
  getProductById,
} from '../controllers/products.controller';


import { authenticateToken } from '../middlewares/auth';
import {
  getAllOrdersForUsers,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  createCustomizedOrder,
} from '../controllers/order.controller';

const router = express.Router();

// user detail routes
router.get('/user', authenticateToken,getUser);
router.put('/user/:id', updateUser);

// Product Routes
router.get('/products',authenticateToken, getAllProducts);
router.get('/products/:id',authenticateToken, getProductById);

// Order Routes
router.get('/orders', authenticateToken, getAllOrdersForUsers);
router.get('/orders/:id', authenticateToken, getOrderById);
router.post('/orders', authenticateToken, createOrder);
router.put('/orders/:id', authenticateToken, updateOrder);
router.delete('/orders/:id', authenticateToken,deleteOrder);
// ----------- //

// category management routes
router.get('/subcategories', authenticateToken, getSubCategories);
router.get("/subcategories/:categoryId",authenticateToken,getSubCategoriesByCategoryId);

// sub category management routes
router.get('/categories', authenticateToken, getCategories);
// Route to get a single category by ID
router.get('/categories/:id', authenticateToken, getCategoryById);
router.post("/customize_order",authenticateToken,createCustomizedOrder);

export default router;
