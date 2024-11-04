import express from 'express';

import {
  getAllProducts,
  getProductById,
} from '../controllers/products.controller';

import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/order.controller';

const router = express.Router();

// Product Routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

// Order Routes
router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.post('/orders', createOrder);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;
