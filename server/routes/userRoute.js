import express from "express";
import {
  getAllUsersController,
  getMeController,
  loginController,
  logoutAllController,
  logoutController,
  refreshController,
  registerController,
  deleteUserController,
  createDeveloperController,
} from "../controller/userController.js";
import { protect } from "../middleware/AuthMiddleware.js";
import { loginValidators, registerValidators } from "../middleware/validate.js";

const userRouter = express.Router();

// ─── Public Routes ────────────────────────────────────────────────────────────

// POST /api/auth/register
userRouter.post("/register", registerValidators, registerController);

// POST /api/auth/login
userRouter.post("/login", loginValidators, loginController);

// POST /api/auth/refresh
userRouter.post("/refresh", refreshController);

// ─── Protected Routes (logged-in user) ───────────────────────────────────────

// GET  /api/auth/me
userRouter.get("/me", protect, getMeController);

// POST /api/auth/logout
userRouter.post("/logout", protect, logoutController);

// POST /api/auth/logout-all
userRouter.post("/logout-all", protect, logoutAllController);

// GET  /api/auth/users
userRouter.get("/users", protect, getAllUsersController);

// POST /api/auth/users/create-developer
userRouter.post("/users/create-developer", protect, createDeveloperController);

// DELETE /api/auth/users/:id
userRouter.delete("/users/:id", protect, deleteUserController);

export default userRouter;