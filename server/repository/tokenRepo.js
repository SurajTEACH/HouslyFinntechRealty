import pool from "../config/db.js";

// ─── Save Refresh Token ───────────────────────────────────────────────────────
export const saveRefreshToken = async (userId, token, expiry) => {
  await pool.execute(
    "INSERT INTO refresh_tokens (user_id, token, expiry_date) VALUES (?, ?, ?)",
    [userId, token, expiry]
  );
};

// ─── Find Refresh Token (with expiry check) ───────────────────────────────────
export const findToken = async (token) => {
  const [rows] = await pool.execute(
    "SELECT * FROM refresh_tokens WHERE token = ? AND expiry_date > NOW()",
    [token]
  );
  return rows[0] || null;
};

// ─── Delete One Token (logout / rotation) ────────────────────────────────────
export const deleteToken = async (token) => {
  await pool.execute(
    "DELETE FROM refresh_tokens WHERE token = ?",
    [token]
  );
};

// ─── Delete All Tokens For User (logout from all devices) ────────────────────
export const deleteAllTokensForUser = async (userId) => {
  await pool.execute(
    "DELETE FROM refresh_tokens WHERE user_id = ?",
    [userId]
  );
};

// ─── Clean Expired Tokens (can be called by a cron job) ──────────────────────
export const purgeExpiredTokens = async () => {
  await pool.execute(
    "DELETE FROM refresh_tokens WHERE expiry_date <= NOW()"
  );
};