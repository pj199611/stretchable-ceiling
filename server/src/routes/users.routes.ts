import express from 'express';
import dotenv from "dotenv";
import upload from '../utils/image-upload';

import {
  getUser,
  updateUser,
  getCategories,
  getSubCategoriesByCategoryId,
  getLocations,
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
  handlePartialPayment,
} from '../controllers/order.controller';

import {
  getDropdownData,
  requestCallback,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  clearCart,
  calculateEstimatedAmount,
  getAllCartItems,
  getWishList,
  clearWishlist
} from '../controllers/users.controller';
import { createRazorPayOrder, paymentVerification } from '../controllers/payment.controller';

const router = express.Router();
dotenv.config();

// User detail routes
router.get('/user', authenticateToken, getUser);
router.put('/user/:id', updateUser);

// Callback request
router.post("/requestcallback", requestCallback);

// Dropdown data
router.get("/dropdownData", getDropdownData);

// Wishlist routes
router.get('/wishlist', authenticateToken,getWishList );
router.post('/wishlist/add', authenticateToken, addToWishlist);
router.delete('/wishlist/remove', authenticateToken, removeFromWishlist);
router.delete('/wishlist/clear', authenticateToken, clearWishlist);

// Cart routes
router.post('/cart/add', authenticateToken, addToCart);
router.delete('/cart/remove', authenticateToken, removeFromCart);
router.delete('/cart/clear', authenticateToken, clearCart);
router.get("/cart",authenticateToken,getAllCartItems);

// Products
router.get("/products", getAllProducts);
router.get("/productClasses", getAllProductsClass);
router.get("/productsOfOneClass/:name", getProductsOfOneClass);
router.get('/productsOfSubCategory', getProductsByCategoryAndSubCategory);
router.get("/productsOfSubCategoryDetails", getProductsByCategoryAndSubCategoryDetails);

// Order Routes
router.get('/orders', authenticateToken, getAllOrdersForUsers);
router.get('/orders/:id', authenticateToken, getOrderById);
router.post('/orders', authenticateToken, createOrder);
router.post("/razorPayOrder",authenticateToken,createRazorPayOrder);

// Route to handle partial payments
router.post('/partial-payment', handlePartialPayment);
router.put('/orders/:id', authenticateToken, updateOrder);
router.delete('/orders/:id', authenticateToken, deleteOrder);
router.post("/verifyPayment",authenticateToken,paymentVerification);

router.post(
  "/customize_order",
  authenticateToken,
  upload.array('images', parseInt(process.env.MAXIMUM_IMAGES_SUPPORTED)),
  createCustomizedOrder
);

// Category management routes
router.get("/subcategories/:categoryId", getSubCategoriesByCategoryId);
// Subcategory management routes
router.get('/categories', getCategories);

// locations
router.get('/location', getLocations);
// calculate estimated routes
router.post("/calculateEstimatedAmount",calculateEstimatedAmount);

export default router;
