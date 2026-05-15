import {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogImage,
  incrementViews,
  updateBlog,
  deleteBlogById,
} from "../repository/blogRepo.js";

export const createBlogService = async (data, file) => {
  return createBlog(data, file);
};

export const getAllBlogsService = async () => {
  return getAllBlogs();
};

export const getBlogByIdService = async (id) => {
  return getBlogById(id);
};

export const getBlogImageService = async (id) => {
  return getBlogImage(id);
};

export const incrementViewsService = async (id) => {
  return incrementViews(id);
};

export const updateBlogService = async (id, data, file) => {
  return updateBlog(id, data, file);
};

export const deleteBlogService = async (id) => {
  return deleteBlogById(id);
};
