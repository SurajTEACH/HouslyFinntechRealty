import {
  createJobService,
  createProjectRequestService,
  getAllProjectRequestsService,
  getJobsService,
  updateStatusService,
  deleteJobService,
  updateJobService,
  deleteProjectRequestService,
} from "../service/projectRequestService.js";

// ─── Project Request ──────────────────────────────────────────────────────────

export const createProjectRequestController = async (req, res, next) => {
  try {
    const result = await createProjectRequestService(req.body);
    res.status(201).json({
      success: true,
      message: "Project inquiry submitted successfully",
      requestId: result.insertId,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProjectRequestsController = async (req, res, next) => {
  try {
    const requests = await getAllProjectRequestsService();
    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    next(error);
  }
};

export const updateStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await updateStatusService(id, status);

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

// ─── Job Opportunities ────────────────────────────────────────────────────────

export const createJobController = async (req, res, next) => {
  try {
    const result = await createJobService(req.body);
    
    res.status(201).json({
      success: true,
      message: "Job opportunity created successfully",
      data: {
        jobId: result.insertId
      }
    });
  } catch (err) {
    // If it's a validation error from service, we can send a 400 Bad Request
    if (err.message.includes("required") || err.message.includes("must be an array")) {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }
    next(err);
  }
};

export const getJobsController = async (req, res, next) => {
  try {
    const jobs = await getJobsService();
    
    res.status(200).json({
      success: true,
      message: "Job opportunities fetched successfully",
      count: jobs.length,
      data: jobs,
    });
  } catch (err) {
    next(err);
  }
};

// update job controller
export const updateJobController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await updateJobService(id, req.body);
    res.status(200).json({ success: true, message: "Job updated successfully" });
  } catch (err) { next(err); }
};

// delete job controller
export const deleteJobController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteJobService(id);
    res.status(200).json({ success: true, message: "Job deleted successfully" });
  } catch (err) { next(err); }
};

// delete project request controller
export const deleteProjectRequestController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteProjectRequestService(id);
    res.status(200).json({ success: true, message: "Project request deleted successfully" });
  } catch (err) { next(err); }
};