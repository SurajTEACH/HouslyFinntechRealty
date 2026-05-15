import jwt from "jsonwebtoken";

// ─── Access Token (15 min) ────────────────────────────────────────────────────
export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};

// ─── Refresh Token (7 days) ───────────────────────────────────────────────────
export const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );
};

// ─── Verify Token ─────────────────────────────────────────────────────────────
export const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};