import express from 'express';
import { authenticateToken } from '../middlewares/auth';
import { checkAdminRole } from '../middlewares/checkAdmin';
import {
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
} from '../controllers/admin.controller';

const router = express.Router();

// user management routes
router.get('/users', authenticateToken, checkAdminRole, getAllUsers);
router.get('/users/:id', authenticateToken, checkAdminRole, getUser);
router.delete('/users/:id', authenticateToken, checkAdminRole, deleteUser);
router.put('/users/:id', authenticateToken, checkAdminRole, updateUser);

export default router;
