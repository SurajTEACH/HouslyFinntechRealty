import axiosInstance from "./axiosInstance";




// ─── Login ────────────────────────────────────────────────────────────────────
/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{ user: object }>}
 */
export const loginApi = async (email, password) => {
  const { data } = await axiosInstance.post("/api/auth/login", {
    email,
    password,
  });
  return data; // { success, message, user }
};

// ─── Logout (current device) ──────────────────────────────────────────────────


export const logoutApi = async () => {
  const { data } = await axiosInstance.post("/api/auth/logout");
  return data; // { success, message }
};

// ─── Logout All Devices ───────────────────────────────────────────────────────
export const logoutAllApi = async () => {
  const { data } = await axiosInstance.post("/api/auth/logout-all");
  return data;
};

// ─── Get My Profile ───────────────────────────────────────────────────────────
/**
 * Uses httpOnly cookie — no token needed in headers.
 * @returns {Promise<{ user: object }>}
 */
export const getMeApi = async () => {
  const { data } = await axiosInstance.get("/api/auth/me");
  return data; // { success, user }
};

// ─── Refresh Token ────────────────────────────────────────────────────────────


export const refreshTokenApi = async () => {
  const { data } = await axiosInstance.post("/api/auth/refresh");
  return data;
};

// ─── Register ─────────────────────────────────────────────────────────────────
/**
 * @param {string} name
 * @param {string} email
 * @param {string} password
 */
export const registerApi = async (name, email, password) => {
  const { data } = await axiosInstance.post("/api/auth/register", {
    name,
    email,
    password,
  });
  return data; // { success, message, userId }
};

// ─── Get All Users (Admin) ────────────────────────────────────────────────────
export const getAllUsersApi = async () => {
  const { data } = await axiosInstance.get("/api/auth/users");
  return data; // { success, count, data: [] }
};

// ─── Delete User (Admin) ──────────────────────────────────────────────────────
export const deleteUserApi = async (id) => {
  const { data } = await axiosInstance.delete(`/api/auth/users/${id}`);
  return data; // { success, message }
};

// ─── Create Developer (Admin) ─────────────────────────────────────────────────
export const createDeveloperApi = async (name, email, password) => {
  const { data } = await axiosInstance.post("/api/auth/users/create-developer", {
    name,
    email,
    password,
  });
  return data; // { success, message, userId }
};

