import pool from "../config/db.js";

// ─── Find User ────────────────────────────────────────────────────────────────

export const findUserByEmail = async (email) => {
  const [rows] = await pool.execute(
    "SELECT id, name, email, password FROM users WHERE email = ?",
    [email]
  );
  return rows[0] || null;
};

export const findUserById = async (id) => {
  const [rows] = await pool.execute(
    "SELECT id, name, email, created_at FROM users WHERE id = ?",
    [id]
  );
  return rows[0] || null;
};

// ─── Create User ──────────────────────────────────────────────────────────────

export const createUser = async (name, email, password) => {
  const [result] = await pool.execute(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password]
  );
  return result.insertId;
};

// ─── Get All Users ────────────────────────────────────────────────────────────

export const getAllUsers = async () => {
  const [rows] = await pool.execute(
    "SELECT id, name, email, created_at FROM users ORDER BY created_at DESC"
  );
  return rows;
};

// ─── Delete User ──────────────────────────────────────────────────────────────

export const deleteUserById = async (id) => {
  const [result] = await pool.execute(
    "DELETE FROM users WHERE id = ?",
    [id]
  );
  return result.affectedRows;
};
