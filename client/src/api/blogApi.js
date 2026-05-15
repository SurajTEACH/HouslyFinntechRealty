import axiosInstance from "./axiosInstance";

/** GET /api/blogs  — all blog posts (public) */
export const getAllBlogsApi = async () => {
  const { data } = await axiosInstance.get("/api/blogs");
  return data;
};

/** GET /api/blogs/:id  — single blog post (public) */
export const getBlogByIdApi = async (id) => {
  const { data } = await axiosInstance.get(`/api/blogs/${id}`);
  return data;
};

/** POST /api/blogs  — create blog post (admin protected, multipart) */
export const createBlogApi = async (formData) => {
  const { data } = await axiosInstance.post("/api/blogs", formData);
  return data;
};

/** PUT /api/blogs/:id  — update blog post (admin protected, multipart) */
export const updateBlogApi = async (id, formData) => {
  const { data } = await axiosInstance.put(`/api/blogs/${id}`, formData);
  return data;
};

/** DELETE /api/blogs/:id  — delete blog post (admin protected) */
export const deleteBlogApi = async (id) => {
  const { data } = await axiosInstance.delete(`/api/blogs/${id}`);
  return data;
};

/** GET /api/blogs/:id/comments  — get all comments for a blog (public) */
export const getCommentsApi = async (blogId) => {
  const { data } = await axiosInstance.get(`/api/blogs/${blogId}/comments`);
  return data;
};

/** POST /api/blogs/:id/comments  — post a comment (public) */
export const addCommentApi = async (blogId, payload) => {
  const { data } = await axiosInstance.post(`/api/blogs/${blogId}/comments`, payload);
  return data;
};

/** DELETE /api/blogs/comments/:commentId  — delete a comment (admin) */
export const deleteCommentApi = async (commentId) => {
  const { data } = await axiosInstance.delete(`/api/blogs/comments/${commentId}`);
  return data;
};
