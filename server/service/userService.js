import bcrypt from "bcrypt";
import {
  createUser,
  findUserByEmail,
  findUserById,
  getAllUsers,
  deleteUserById,
} from "../repository/userRepo.js";
import { generateToken, generateRefreshToken } from "../utility/token.js";
import {
  deleteAllTokensForUser,
  deleteToken,
  findToken,
  saveRefreshToken,
} from "../repository/tokenRepo.js";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const SALT_ROUNDS = 12;

const buildRefreshExpiry = () => {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return expiry;
};

export const COOKIE_OPTIONS = {
  httpOnly: true,
  
  
  secure: process.env.NODE_ENV === "production",
 
  
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
};

// ─── Register ─────────────────────────────────────────────────────────────────

export const registerService = async (name, email, password) => {
  const existing = await findUserByEmail(email);
  if (existing) {
    const err = new Error("Email is already registered");
    err.statusCode = 409;
    throw err;
  }

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  if (!passwordRegex.test(password)) {
    const err = new Error(
      "Password must be at least 8 characters and include 1 uppercase letter, 1 number, and 1 special character"
    );
    err.statusCode = 422;
    throw err;
  }

  const hashed = await bcrypt.hash(password, SALT_ROUNDS);
  const userId = await createUser(name, email, hashed);
  return userId;
};

// ─── Login ────────────────────────────────────────────────────────────────────

export const loginService = async (email, password) => {
  const user = await findUserByEmail(email);

  if (!user) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const accessToken = generateToken(user);
  const refreshToken = generateRefreshToken(user);

  await saveRefreshToken(user.id, refreshToken, buildRefreshExpiry());

  const { password: _removed, ...safeUser } = user;
  return { accessToken, refreshToken, user: safeUser };
};

// ─── Refresh Token (with rotation) ───────────────────────────────────────────

export const refreshService = async (oldToken) => {
  if (!oldToken) {
    const err = new Error("Refresh token missing");
    err.statusCode = 401;
    throw err;
  }

  const stored = await findToken(oldToken);
  if (!stored) {
    const err = new Error("Refresh token is invalid or expired");
    err.statusCode = 401;
    throw err;
  }

  const user = await findUserById(stored.user_id);
  if (!user) {
    const err = new Error("User no longer exists");
    err.statusCode = 401;
    throw err;
  }

  // Rotate tokens
  await deleteToken(oldToken);
  const newRefreshToken = generateRefreshToken(user);
  await saveRefreshToken(user.id, newRefreshToken, buildRefreshExpiry());

  const accessToken = generateToken(user);
  return { accessToken, refreshToken: newRefreshToken };
};

// ─── Logout ───────────────────────────────────────────────────────────────────

export const logoutService = async (token) => {
  if (token) await deleteToken(token);
};

export const logoutAllService = async (userId) => {
  await deleteAllTokensForUser(userId);
};

// ─── Profile ──────────────────────────────────────────────────────────────────

export const getMeService = async (userId) => {
  const user = await findUserById(userId);
  if (!user) {
    const err = new Error("User not found");
    err.statusCode = 404;
    throw err;
  }
  return user;
};

// ─── Get All Users ────────────────────────────────────────────────────────────

export const getAllUsersService = async () => {
  return await getAllUsers();
};

// ─── Delete User ────────────────────────────────────────────────────────────

export const deleteUserService = async (id) => {
  const affected = await deleteUserById(id);
  if (!affected) {
    const err = new Error("User not found");
    err.statusCode = 404;
    throw err;
  }
  return true;
};

// ─── Create Developer (Admin) ─────────────────────────────────────────────────

export const createDeveloperService = async (name, email, password) => {
  const existing = await findUserByEmail(email);
  if (existing) {
    const err = new Error("Email is already registered");
    err.statusCode = 409;
    throw err;
  }
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);
  const userId = await createUser(name, email, hashed);
  return userId;
};