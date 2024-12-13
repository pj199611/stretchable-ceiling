import express from 'express';
import dotenv from "dotenv"
import upload from '../utils/image-upload';
import {
  getUser,
  updateUser,
  getCategories,
  getSubCategoriesByCategoryId,
  getDropdownData
} from '../controllers/admin.controller';

import {
  getAllProducts,
  getAllProductsClass,
  getProductsByCategoryAndSubCategory,
  getProductsByCategoryAndSubCategoryDetails,
  getProductsOfOneClass
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
dotenv.config();


// user detail routes
router.get('/user', authenticateToken,getUser);
router.put('/user/:id', updateUser);


//dropdown data
router.get("/dropdownData",getDropdownData);

// products
router.get("/products",getAllProducts);
router.get("/productClasses",getAllProductsClass);
router.get("/productsOfOneClass/:name",getProductsOfOneClass);
router.get('/productsOfSubCategory', getProductsByCategoryAndSubCategory);
router.get("/productsOfSubCategoryDetails",getProductsByCategoryAndSubCategoryDetails);
// Order Routes
router.get('/orders', authenticateToken, getAllOrdersForUsers);
router.get('/orders/:id', authenticateToken, getOrderById);
router.post('/orders', authenticateToken, createOrder);
router.put('/orders/:id', authenticateToken, updateOrder);
router.delete('/orders/:id', authenticateToken,deleteOrder);
router.post("/customize_order",authenticateToken,upload.array('images', parseInt(process.env.MAXIMUM_IMAGES_SUPPORTED)),createCustomizedOrder);
// ----------- //

// category management routes
router.get("/subcategories/:categoryId",getSubCategoriesByCategoryId);
// sub category management routes
router.get('/categories', getCategories);

export default router;
