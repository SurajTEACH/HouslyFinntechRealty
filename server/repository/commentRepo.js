import pool from "../config/db.js";

// Auto-create blog_comments table
export const initCommentsTable = async () => {
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS blog_comments (
      id         INT AUTO_INCREMENT PRIMARY KEY,
      blog_id    INT NOT NULL,
      name       VARCHAR(150) NOT NULL,
      email      VARCHAR(200),
      comment    TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE
    )
  `);
};

// Add comment
export const addComment = async (blog_id, name, email, comment) => {
  const [result] = await pool.execute(
    "INSERT INTO blog_comments (blog_id, name, email, comment) VALUES (?, ?, ?, ?)",
    [blog_id, name, email || null, comment]
  );
  return result;
};

// Get comments for a blog
export const getCommentsByBlogId = async (blog_id) => {
  const [rows] = await pool.execute(
    `SELECT id, name, email, comment, created_at
     FROM blog_comments
     WHERE blog_id = ?
     ORDER BY created_at DESC`,
    [blog_id]
  );
  return rows;
};

// Delete comment (admin)
export const deleteCommentById = async (id) => {
  const [result] = await pool.execute(
    "DELETE FROM blog_comments WHERE id = ?",
    [id]
  );
  return result.affectedRows;
};
