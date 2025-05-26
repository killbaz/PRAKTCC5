import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginHandler,
  logout,
} from "../controller/UserController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// User Management
router.get("/users", verifyToken, getUsers);          // ← tambahkan proteksi (opsional)
router.get("/users/:id", verifyToken, getUserById);   // ← tambahkan proteksi (opsional)
router.post("/create-users", createUser);
router.put("/update-users/:id", verifyToken, updateUser);   // ← proteksi user update
router.delete("/delete-users/:id", verifyToken, deleteUser); // ← proteksi user delete

// Auth
router.post("/login", loginHandler);
router.post("/logout", verifyToken, logout);

export default router;
