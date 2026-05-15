import {
  createBlogService,
  getAllBlogsService,
  getBlogByIdService,
  getBlogImageService,
  incrementViewsService,
  updateBlogService,
  deleteBlogService,
} from "../service/blogService.js";

// POST /api/blogs  — create blog (admin protected)
export const createBlogPost = async (req, res, next) => {
  try {
    const result = await createBlogService(req.body, req.file);
    res.status(201).json({ message: "Blog created", id: result.insertId });
  } catch (err) {
    next(err);
  }
};

// GET /api/blogs  — all blogs (public)
export const getAllBlogPosts = async (req, res, next) => {
  try {
    const blogs = await getAllBlogsService();
    // Attach image URL for each post that has an image
    const data = blogs.map((b) => ({
      ...b,
      image_url: b.has_image ? `${req.protocol}://${req.get("host")}/api/blogs/${b.id}/image` : null,
      tags: typeof b.tags === "string" ? JSON.parse(b.tags) : (b.tags || []),
    }));
    res.json({ message: "Blogs fetched", data });
  } catch (err) {
    next(err);
  }
};

// GET /api/blogs/:id  — single blog (public, increments views)
export const getBlogPost = async (req, res, next) => {
  try {
    const blog = await getBlogByIdService(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    await incrementViewsService(req.params.id);

    res.json({
      message: "Blog fetched",
      data: {
        ...blog,
        image_url: blog.has_image
          ? `${req.protocol}://${req.get("host")}/api/blogs/${blog.id}/image`
          : null,
        tags: typeof blog.tags === "string" ? JSON.parse(blog.tags) : (blog.tags || []),
        views: (blog.views || 0) + 1,
      },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/blogs/:id/image  — serve image blob (public)
export const getBlogImage = async (req, res, next) => {
  try {
    const row = await getBlogImageService(req.params.id);
    if (!row || !row.image) return res.status(404).json({ message: "Image not found" });
    res.setHeader("Content-Type", row.image_type || "image/jpeg");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(row.image);
  } catch (err) {
    next(err);
  }
};

// PUT /api/blogs/:id  — update blog (admin protected)
export const updateBlogPost = async (req, res, next) => {
  try {
    await updateBlogService(req.params.id, req.body, req.file || null);
    res.json({ message: "Blog updated" });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/blogs/:id  — delete blog (admin protected)
export const deleteBlogPost = async (req, res, next) => {
  try {
    await deleteBlogService(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    next(err);
  }
};
