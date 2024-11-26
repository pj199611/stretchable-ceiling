import express from 'express';
import {
  getUser,
  updateUser,
  getCategories,
  getSubCategoriesByCategoryId
} from '../controllers/admin.controller';

import {
  getProductsByCategoryAndSubCategory
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

// products
router.get('/productsOfSubCategory', getProductsByCategoryAndSubCategory);

// Order Routes
router.get('/orders', authenticateToken, getAllOrdersForUsers);
router.get('/orders/:id', authenticateToken, getOrderById);
router.post('/orders', authenticateToken, createOrder);
router.put('/orders/:id', authenticateToken, updateOrder);
router.delete('/orders/:id', authenticateToken,deleteOrder);
router.post("/customize_order",authenticateToken,createCustomizedOrder);
// ----------- //

// category management routes
router.get("/subcategories/:categoryId",getSubCategoriesByCategoryId);

// sub category management routes
router.get('/categories', getCategories);

export default router;
