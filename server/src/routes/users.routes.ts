import express from 'express';
import { getUser, updateUser } from '../controllers/admin.controller';
import {
  getAllProducts,
  getProductById,
} from '../controllers/products.controller';

import { authenticateToken } from '../middlewares/auth'; 
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/order.controller';

const router = express.Router();

// user detail routes
router.get('/users/:id', getUser);
router.put('/user/:id', updateUser);

// Product Routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

// Order Routes
router.get('/orders',authenticateToken, getAllOrders);
router.get('/orders/:id',authenticateToken, getOrderById);
router.post('/orders', authenticateToken,createOrder);
router.put('/orders/:id', authenticateToken,updateOrder);
// ----------- //

router.delete('/orders/:id', deleteOrder);

export default router;
