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

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Product management
 */

/**
 * @swagger
 * /api/admin/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/products', authenticateToken, getAllProducts);

/**
 * @swagger
 * /api/admin/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get('/products/:id', authenticateToken, getProductById);

/**
 * @swagger
 * /api/admin/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router.post(
  '/products',
  authenticateToken,
  checkAdminRole,
  upload.single('image'),
  createProduct
);

/**
 * @swagger
 * /api/admin/products/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 */
router.put('/products/:id', authenticateToken, checkAdminRole, updateProduct);

/**
 * @swagger
 * /api/admin/products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */
router.delete(
  '/products/:id',
  authenticateToken,
  checkAdminRole,
  deleteProduct
);

router.get(
  '/productsOfSubCategory',
  authenticateToken,
  checkAdminRole,
  getProductsByCategoryAndSubCategory
);

// Order Routes

/**
 * @swagger
 * tags:
 *   - name: Orders
 *     description: Order management
 */

/**
 * @swagger
 * /api/admin/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/orders', authenticateToken, getAllOrders);

/**
 * @swagger
 * /api/admin/orders/{id}:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 */
router.get('/orders/:id', authenticateToken, getOrderById);

/**
 * @swagger
 *  /api/admin/orders/{id}:
 *   put:
 *     summary: Update order status and remarks
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               remarks:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order updated successfully
 */
router.put(
  '/orders/:id',
  authenticateToken,
  checkAdminRole,
  changeOrderStatusAndRemarks
);

// User Management Routes

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: User management
 */

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users', authenticateToken, checkAdminRole, getAllUsers);

/**
 * @swagger
 * /api/admin/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get('/users/:id', authenticateToken, checkAdminRole, getUser);

/**
 * @swagger
 * /api/admin/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
router.delete('/users/:id', authenticateToken, checkAdminRole, deleteUser);

/**
 * @swagger
 * /api/admin/users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put('/users/:id', authenticateToken, checkAdminRole, updateUser);

// Clients Routes

/**
 * @swagger
 * tags:
 *   - name: Clients
 *     description: Client management
 */

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get all clients
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all clients.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 */
router.get('/clients', authenticateToken, getClients);

/**
 * @swagger
 * /api/admin/users/{id}:
 *   get:
 *     summary: Get a client by ID
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Client ID
 *     responses:
 *       200:
 *         description: Client details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Client not found
 */
router.get('/clients/:id', authenticateToken, getClientById);

//  sub category management
// Route to create a new subcategory
router.post(
  '/subcategories',
  authenticateToken,
  checkAdminRole,
  createSubCategory
);
// Route to get all subcategories
router.get(
  '/subcategories',
  authenticateToken,
  checkAdminRole,
  getSubCategories
);
// Route to get a single subcategory by ID
router.get(
  '/subcategories/:id',
  authenticateToken,
  checkAdminRole,
  getSubCategoryById
);
// Route to update a subcategory by ID
router.put(
  '/subcategories/:id',
  authenticateToken,
  checkAdminRole,
  updateSubCategory
);
// Route to delete a subcategory by ID
router.delete(
  '/subcategories/:id',
  authenticateToken,
  checkAdminRole,
  deleteSubCategory
);

//category management

// Route to create a new category
router.post('/categories', authenticateToken, checkAdminRole, createCategory);
// Route to get all categories
router.get('/categories', authenticateToken, checkAdminRole, getCategories);
// Route to get a single category by ID
router.get(
  '/categories/:id',
  authenticateToken,
  checkAdminRole,
  getCategoryById
);
// Route to update a category by ID
router.put(
  '/categories/:id',
  authenticateToken,
  checkAdminRole,
  updateCategory
);
// Route to delete a category by ID
router.delete(
  '/categories/:id',
  authenticateToken,
  checkAdminRole,
  deleteCategory
);

//  locations management routes
router.post('/', authenticateToken, checkAdminRole, createLocation);
router.get('/', authenticateToken, checkAdminRole, getLocations);
router.get('/:id', authenticateToken, checkAdminRole, getLocationById);
router.put('/:id', authenticateToken, checkAdminRole, updateLocation);
router.delete('/:id', authenticateToken, checkAdminRole, deleteLocation);

export default router;
