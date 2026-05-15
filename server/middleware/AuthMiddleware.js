import { verifyToken } from "../utility/token.js";

// ─── protect ─────────────────────────────────────────────────────────────────
// Verifies accessToken from httpOnly cookie.
// Attaches decoded user (id, name, email) to req.user.

export const protect = (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Please log in.",
      });
    }

    const decoded = verifyToken(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, name, email, iat, exp }
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Session expired. Please refresh your token.",
        code: "TOKEN_EXPIRED",
      });
    }
    return res.status(401).json({
      success: false,
      message: "Invalid token. Please log in again.",
      code: "INVALID_TOKEN",
    });
  }
};
