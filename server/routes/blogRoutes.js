import express from "express";
import {
  createBlogPost,
  getAllBlogPosts,
  getBlogPost,
  getBlogImage,
  updateBlogPost,
  deleteBlogPost,
} from "../controller/blogController.js";
import {
  addComment,
  getComments,
  deleteComment,
} from "../controller/commentController.js";
import { upload } from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/AuthMiddleware.js";

const blogRouter = express.Router();

// ── Blog CRUD ──────────────────────────────────────────────────────────────
// Public routes
blogRouter.get("/", getAllBlogPosts);
blogRouter.get("/:id/image", getBlogImage);
blogRouter.get("/:id", getBlogPost);

// Protected (admin) routes
blogRouter.post("/", protect, upload.single("image"), createBlogPost);
blogRouter.put("/:id", protect, upload.single("image"), updateBlogPost);
blogRouter.delete("/:id", protect, deleteBlogPost);

// ── Comments ───────────────────────────────────────────────────────────────
blogRouter.get("/:id/comments", getComments);          // public
blogRouter.post("/:id/comments", addComment);          // public
blogRouter.delete("/comments/:commentId", protect, deleteComment); // admin

export default blogRouter;
