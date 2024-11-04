import express from 'express';
import { authenticateToken } from '../middlewares/auth';
import { checkAdminRole } from '../middlewares/checkAdmin';
import {
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
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
router.get('/products',authenticateToken, checkAdminRole, getAllProducts);
router.get('/products/:id',authenticateToken, checkAdminRole, getProductById);
router.post('/products/', authenticateToken, checkAdminRole,createProduct);
router.put('/products/:id',authenticateToken, checkAdminRole, updateProduct);
router.delete('/products/:id',authenticateToken, checkAdminRole, deleteProduct);


// user management routes
router.get('/users', authenticateToken, checkAdminRole, getAllUsers);
router.get('/users/:id', authenticateToken, checkAdminRole, getUser);
router.delete('/users/:id', authenticateToken, checkAdminRole, deleteUser);
router.put('/users/:id', authenticateToken, checkAdminRole, updateUser);

export default router;
