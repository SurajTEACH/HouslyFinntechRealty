import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import {
  createJobController,
  createProjectRequestController,
  getAllProjectRequestsController,
  getJobsController,
  updateStatus,
  deleteJobController,
  updateJobController,
  deleteProjectRequestController,
} from "../controller/ProjectReqestController.js";

const projectRouter = express.Router();

// ─── Project Inquiry Routes ───────────────────────────────────────────────────
projectRouter.post("/create", createProjectRequestController);
projectRouter.get("/get-all", protect, getAllProjectRequestsController);
projectRouter.put("/:id/status", protect, updateStatus);
projectRouter.delete("/:id", protect, deleteProjectRequestController);

// ─── Job Opportunity Routes ───────────────────────────────────────────────────
projectRouter.post("/create-job", protect, createJobController);
projectRouter.get("/jobs", getJobsController);
projectRouter.put("/jobs/:id", protect, updateJobController);
projectRouter.delete("/jobs/:id", protect, deleteJobController);

export default projectRouter;
