import express from "express";
import {
  createContact,
  getContacts,
} from "../controller/contactController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Public Route
router.post("/", createContact);

// Admin Route
router.get("/",protect, getContacts);

export default router;