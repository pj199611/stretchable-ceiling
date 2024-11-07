import express from 'express';
import { authenticateToken } from '../middlewares/auth';
import { checkAdminRole } from '../middlewares/roles';
import {
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
  getAllOrders,
  changeOrderStatusAndRemarks,
  getOrderById,
  getClients,getClientById
} from '../controllers/admin.controller';

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller';


const router = express.Router();

// products management routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', authenticateToken, checkAdminRole,createProduct);
router.put('/products/:id',authenticateToken, checkAdminRole, updateProduct);
router.delete('/products/:id',authenticateToken, checkAdminRole, deleteProduct);

// Order Routes
router.get('/orders',authenticateToken, getAllOrders);
router.get('/orders/:id',authenticateToken, getOrderById);
router.put('/orders/:id', authenticateToken,checkAdminRole,changeOrderStatusAndRemarks);

// user management routes
router.get('/users', authenticateToken, checkAdminRole, getAllUsers);
router.get('/users/:id', authenticateToken, checkAdminRole, getUser);
router.delete('/users/:id', authenticateToken, checkAdminRole, deleteUser);
router.put('/users/:id', authenticateToken, checkAdminRole, updateUser);


// clients routes
router.get('/clients', authenticateToken, getClients);
router.get('/clients/:id', authenticateToken, getClientById);

export default router;
