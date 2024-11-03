import express from "express";
import { authenticateToken } from "../../middleware/auth";
import { checkAdminRole } from "../../middleware/checkAdmin";
import { getAllUsers,deleteUser,updateUser } from "../../controller/admins/users.controller";



const router = express.Router();
router.get("/users", authenticateToken, checkAdminRole, getAllUsers);
router.delete("/users/:id", authenticateToken, checkAdminRole, deleteUser);
router.put("/users/:id", authenticateToken, checkAdminRole, updateUser);

export default router;
