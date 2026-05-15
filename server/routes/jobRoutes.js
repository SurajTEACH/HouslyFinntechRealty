import express from "express";
import {
  applyJob,
  getApplicationsFull,
  getResume,
  updateStatus,
  deleteApplication,
} from "../controller/jobController.js";
import { upload } from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/AuthMiddleware.js";

const jobRouter = express.Router();

jobRouter.post("/apply", upload.single("resume"), applyJob);
jobRouter.get("/", protect, getApplicationsFull);
jobRouter.get("/resume/:id", protect, getResume);
jobRouter.put("/:id/status", protect, updateStatus);
jobRouter.delete("/:id", protect, deleteApplication);

export default jobRouter;