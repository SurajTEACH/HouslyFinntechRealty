import {
  addComment,
  getCommentsByBlogId,
  deleteCommentById,
} from "../repository/commentRepo.js";

export const addCommentService = (blog_id, name, email, comment) =>
  addComment(blog_id, name, email, comment);

export const getCommentsByBlogIdService = (blog_id) =>
  getCommentsByBlogId(blog_id);

export const deleteCommentService = (id) => deleteCommentById(id);
