import express from 'express';
import { authenticateToken } from '../middlewares/auth';
import { checkAdminRole } from '../middlewares/roles';
import upload from '../utils/image-upload';
import {
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
  getAllOrders,
  changeOrderStatusAndRemarks,
  getOrderById,
  getClients,
  getClientById,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getSubCategories,
  getSubCategoryById,
  createCategory,
  updateCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  createLocation,
  deleteLocation,
  updateLocation,
  getLocationById,
  getLocations
} from '../controllers/admin.controller';

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategoryAndSubCategory,
} from '../controllers/products.controller';

const router = express.Router();

// Products Management Routes
router.get('/products', authenticateToken, getAllProducts);
router.get('/products/:id', authenticateToken, getProductById);
router.post('/products', authenticateToken, checkAdminRole, upload.single('image'), createProduct);
router.put('/products/:id', authenticateToken, checkAdminRole, updateProduct);
router.delete('/products/:id', authenticateToken, checkAdminRole, deleteProduct);
router.get('/productsOfSubCategory', authenticateToken, checkAdminRole, getProductsByCategoryAndSubCategory);

// Order Routes
router.get('/orders', authenticateToken, getAllOrders);
router.get('/orders/:id', authenticateToken, getOrderById);
router.put('/orders/:id', authenticateToken, checkAdminRole, changeOrderStatusAndRemarks);

// User Management Routes
router.get('/users', authenticateToken, checkAdminRole, getAllUsers);
router.get('/users/:id', authenticateToken, checkAdminRole, getUser);
router.delete('/users/:id', authenticateToken, checkAdminRole, deleteUser);
router.put('/users/:id', authenticateToken, checkAdminRole, updateUser);

// Clients Routes
router.get('/clients', authenticateToken, getClients);
router.get('/clients/:id', authenticateToken, getClientById);

// Subcategory Management
router.post('/subcategories', authenticateToken, checkAdminRole, createSubCategory);
router.get('/subcategories', authenticateToken, checkAdminRole, getSubCategories);
router.get('/subcategories/:id', authenticateToken, checkAdminRole, getSubCategoryById);
router.put('/subcategories/:id', authenticateToken, checkAdminRole, updateSubCategory);
router.delete('/subcategories/:id', authenticateToken, checkAdminRole, deleteSubCategory);

// Category Management
router.post('/categories', authenticateToken, checkAdminRole, createCategory);
router.get('/categories', authenticateToken, checkAdminRole, getCategories);
router.get('/categories/:id', authenticateToken, checkAdminRole, getCategoryById);
router.put('/categories/:id', authenticateToken, checkAdminRole, updateCategory);
router.delete('/categories/:id', authenticateToken, checkAdminRole, deleteCategory);

// Locations Management Routes
router.post('/location', authenticateToken, checkAdminRole, createLocation);
router.get('/location', authenticateToken, checkAdminRole, getLocations);
router.get('/location/:id', authenticateToken, checkAdminRole, getLocationById);
router.put('/location/:id', authenticateToken, checkAdminRole, updateLocation);
router.delete('/location/:id', authenticateToken, checkAdminRole, deleteLocation);

export default router;
