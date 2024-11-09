import express from 'express';
import {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  getAllOrdersForUsers,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/architect.controller';
import { checkArchitectRole } from '../middlewares/roles';

import {
  getAllProducts,
  getProductById,
} from '../controllers/products.controller';

import { authenticateToken } from '../middlewares/auth';
import {
  getSubCategories,
  getSubCategoryById,
  getCategories,
  getCategoryById,
} from '../controllers/admin.controller';

const router = express.Router();

//clients
router.get('/clients', authenticateToken, checkArchitectRole, getClients);
router.get(
  '/clients/:id',
  authenticateToken,
  checkArchitectRole,
  getClientById
);
router.post('/clients', authenticateToken, checkArchitectRole, createClient);
router.put('/clients/:id', authenticateToken, checkArchitectRole, updateClient);
router.delete(
  '/clients/:id',
  authenticateToken,
  checkArchitectRole,
  deleteClient
);

// products
router.get('/products', authenticateToken, getAllProducts);
router.get('/products/:id', authenticateToken, getProductById);

//orders
router.get(
  '/orders/:clientId',
  authenticateToken,
  checkArchitectRole,
  getAllOrdersForUsers
);
router.get('/orders/:id', authenticateToken, checkArchitectRole, getOrderById);
router.post('/orders', authenticateToken, checkArchitectRole, createOrder);
router.put('/orders/:id', authenticateToken, checkArchitectRole, updateOrder);
router.delete(
  '/orders/:id',
  authenticateToken,
  checkArchitectRole,
  deleteOrder
);

// category routes
router.get('/subcategories', authenticateToken, getSubCategories);
router.get('/subcategories/:id', authenticateToken, getSubCategoryById);

// sub category management routes
router.get('/categories', authenticateToken, getCategories);
router.get('/categories/:id', authenticateToken, getCategoryById);

export default router;
