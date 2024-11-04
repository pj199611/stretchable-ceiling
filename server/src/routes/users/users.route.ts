import express from 'express';
import { authenticateToken } from '../../middleware/auth';
import { checkAdminRole } from '../../middleware/checkAdmin';
import {
  getAllUsers,
  deleteUser,
  updateUser,
} from '../../controller/users/users.controller';

const router = express.Router();

router.post('/place-order', (req, res) => {
  res.send('place order');
});
// user management routes
router.get('/', authenticateToken, checkAdminRole, getAllUsers);
router.delete('/:id', authenticateToken, checkAdminRole, deleteUser);
router.put('/:id', authenticateToken, checkAdminRole, updateUser);

export default router;
