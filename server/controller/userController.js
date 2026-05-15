import {
  getAllUsersService,
  getMeService,
  loginService,
  logoutAllService,
  logoutService,
  refreshService,
  registerService,
  deleteUserService,
  createDeveloperService,
  COOKIE_OPTIONS,
} from "../service/userService.js";

// ─── Cookie config ────────────────────────────────────────────────────────────

const ACCESS_COOKIE_OPTIONS = {
  ...COOKIE_OPTIONS,
  maxAge: 15 * 60 * 1000, // 15 minutes
};

const REFRESH_COOKIE_OPTIONS = {
  ...COOKIE_OPTIONS,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// ─── Register ─────────────────────────────────────────────────────────────────

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userId = await registerService(name, email, password);

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      userId,
    });
  } catch (err) {
    next(err);
  }
};

// ─── Login ────────────────────────────────────────────────────────────────────

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { accessToken, refreshToken, user } = await loginService(
      email,
      password
    );

    res
      .cookie("accessToken", accessToken, ACCESS_COOKIE_OPTIONS)
      .cookie("refreshToken", refreshToken, REFRESH_COOKIE_OPTIONS)
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        user,
      });
  } catch (err) {
    next(err);
  }
};

// ─── Refresh Token ────────────────────────────────────────────────────────────

export const refreshController = async (req, res, next) => {
  try {
    const oldToken = req.cookies?.refreshToken;

    const { accessToken, refreshToken } = await refreshService(oldToken);

    res
      .cookie("accessToken", accessToken, ACCESS_COOKIE_OPTIONS)
      .cookie("refreshToken", refreshToken, REFRESH_COOKIE_OPTIONS)
      .status(200)
      .json({
        success: true,
        message: "Token refreshed successfully",
      });
  } catch (err) {
    next(err);
  }
};

// ─── Logout (current device) ──────────────────────────────────────────────────

export const logoutController = async (req, res, next) => {
  try {
    const token = req.cookies?.refreshToken;

    await logoutService(token);

    res
      .clearCookie("accessToken", COOKIE_OPTIONS)
      .clearCookie("refreshToken", COOKIE_OPTIONS)
      .status(200)
      .json({
        success: true,
        message: "Logged out successfully",
      });
  } catch (err) {
    next(err);
  }
};

// ─── Logout All Devices ───────────────────────────────────────────────────────

export const logoutAllController = async (req, res, next) => {
  try {
    await logoutAllService(req.user.id);

    res
      .clearCookie("accessToken", COOKIE_OPTIONS)
      .clearCookie("refreshToken", COOKIE_OPTIONS)
      .status(200)
      .json({
        success: true,
        message: "Logged out from all devices",
      });
  } catch (err) {
    next(err);
  }
};

// ─── Get My Profile ───────────────────────────────────────────────────────────

export const getMeController = async (req, res, next) => {
  try {
    const user = await getMeService(req.user.id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    next(err);
  }
};

// ─── Admin: Get All Users ─────────────────────────────────────────────────────

export const getAllUsersController = async (req, res, next) => {
  try {
    const users = await getAllUsersService();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

// ─── Admin: Delete User ────────────────────────────────────────────────────

export const deleteUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteUserService(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

// ─── Admin: Create Developer ──────────────────────────────────────────────────

export const createDeveloperController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userId = await createDeveloperService(name, email, password);

    res.status(201).json({
      success: true,
      message: "Developer account created successfully",
      userId,
    });
  } catch (err) {
    next(err);
  }
};