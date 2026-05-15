import pool from "../config/db.js";

// Create the blogs table if not exists
export const initBlogsTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS blogs (
      id          INT AUTO_INCREMENT PRIMARY KEY,
      title       VARCHAR(500)  NOT NULL,
      description TEXT          NOT NULL,
      category    VARCHAR(100)  NOT NULL,
      author      VARCHAR(150)  NOT NULL DEFAULT 'Kamlesh Shah',
      read_time   VARCHAR(50)   NOT NULL DEFAULT '5 min read',
      image       LONGBLOB,
      image_type  VARCHAR(100),
      tags        JSON,
      content     LONGTEXT,
      views       INT           DEFAULT 0,
      created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
      updated_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;
  await pool.execute(sql);
};

// Create a blog post
export const createBlog = async (data, file) => {
  const sql = `
    INSERT INTO blogs (title, description, category, author, read_time, image, image_type, tags, content)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.title,
    data.description,
    data.category,
    data.author || "Kamlesh Shah",
    data.read_time || "5 min read",
    file ? file.buffer : null,
    file ? file.mimetype : null,
    data.tags ? JSON.stringify(JSON.parse(data.tags)) : JSON.stringify([]),
    data.content || "",
  ];
  const [result] = await pool.execute(sql, values);
  return result;
};

// Get all blogs (without blob image for listing)
export const getAllBlogs = async () => {
  const [rows] = await pool.execute(`
    SELECT id, title, description, category, author, read_time,
           tags, content, views, created_at, updated_at,
           CASE WHEN image IS NOT NULL THEN 1 ELSE 0 END AS has_image
    FROM blogs
    ORDER BY created_at DESC
  `);
  return rows;
};

// Get single blog by id (without blob)
export const getBlogById = async (id) => {
  const [rows] = await pool.execute(
    `SELECT id, title, description, category, author, read_time,
            tags, content, views, created_at, updated_at,
            CASE WHEN image IS NOT NULL THEN 1 ELSE 0 END AS has_image
     FROM blogs WHERE id = ?`,
    [id]
  );
  return rows[0];
};

// Get blog image by id
export const getBlogImage = async (id) => {
  const [rows] = await pool.execute(
    "SELECT image, image_type FROM blogs WHERE id = ?",
    [id]
  );
  return rows[0];
};

// Increment views
export const incrementViews = async (id) => {
  await pool.execute("UPDATE blogs SET views = views + 1 WHERE id = ?", [id]);
};

// Update blog
export const updateBlog = async (id, data, file) => {
  let sql, values;
  if (file) {
    sql = `
      UPDATE blogs SET title=?, description=?, category=?, author=?, read_time=?,
        image=?, image_type=?, tags=?, content=?
      WHERE id=?
    `;
    values = [
      data.title, data.description, data.category,
      data.author || "Kamlesh Shah", data.read_time || "5 min read",
      file.buffer, file.mimetype,
      data.tags ? JSON.stringify(JSON.parse(data.tags)) : JSON.stringify([]),
      data.content || "", id,
    ];
  } else {
    sql = `
      UPDATE blogs SET title=?, description=?, category=?, author=?, read_time=?,
        tags=?, content=?
      WHERE id=?
    `;
    values = [
      data.title, data.description, data.category,
      data.author || "Kamlesh Shah", data.read_time || "5 min read",
      data.tags ? JSON.stringify(JSON.parse(data.tags)) : JSON.stringify([]),
      data.content || "", id,
    ];
  }
  const [result] = await pool.execute(sql, values);
  return result;
};

// Delete blog
export const deleteBlogById = async (id) => {
  const [result] = await pool.execute("DELETE FROM blogs WHERE id = ?", [id]);
  return result.affectedRows;
};
