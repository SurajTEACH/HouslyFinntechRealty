import {
  addCommentService,
  getCommentsByBlogIdService,
  deleteCommentService,
} from "../service/commentService.js";

// POST /api/blogs/:id/comments  — add comment (public)
export const addComment = async (req, res, next) => {
  try {
    const { name, email, comment } = req.body;
    if (!name?.trim() || !comment?.trim())
      return res.status(400).json({ message: "Name and comment are required" });

    const result = await addCommentService(
      req.params.id,
      name.trim(),
      email?.trim() || null,
      comment.trim()
    );
    res.status(201).json({ message: "Comment added", id: result.insertId });
  } catch (err) {
    next(err);
  }
};

// GET /api/blogs/:id/comments  — get comments for a blog (public)
export const getComments = async (req, res, next) => {
  try {
    const comments = await getCommentsByBlogIdService(req.params.id);
    res.json({ message: "Comments fetched", data: comments });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/blogs/comments/:commentId  — delete comment (admin protected)
export const deleteComment = async (req, res, next) => {
  try {
    await deleteCommentService(req.params.commentId);
    res.json({ message: "Comment deleted" });
  } catch (err) {
    next(err);
  }
};
