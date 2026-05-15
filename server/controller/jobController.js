import {
  createApplicationService,
  getApplicationsFullService,
  getResumeService,
  updateStatusService,
  deleteApplicationService,
} from "../service/jobService.js";

// Create Application
export const applyJob = async (req, res, next) => {
  try {
    const result = await createApplicationService(req.body, req.file);

    res.status(201).json({
      message: "Application submitted",
      id: result.insertId,
    });
  } catch (err) {
    next(err);
  }
};

// Get Applications


export const getApplicationsFull = async (req, res, next) => {
  try {
    const data = await getApplicationsFullService();

    // 🔥 Resume link attach
    const updatedData = data.map((item) => ({
      ...item,
      resume_url: `${req.protocol}://${req.get("host")}/api/jobs/resume/${item.id}`
    }));

    res.json({
      message: "Full applications fetched",
      data: updatedData
    });

  } catch (err) {
    next(err);
  }
};

// View Resume
export const getResume = async (req, res, next) => {
  try {
    const resume = await getResumeService(req.params.id);

    res.setHeader("Content-Type", resume.resume_type);
    res.send(resume.resume); // 👈 file directly open होगा
  } catch (err) {
    next(err);
  }
};

// Update Status
export const updateStatus = async (req, res, next) => {
  try {
    await updateStatusService(req.params.id, req.body.status);
    res.json({ message: "Status updated" });
  } catch (err) { next(err); }
};

// Delete Application
export const deleteApplication = async (req, res, next) => {
  try {
    await deleteApplicationService(req.params.id);
    res.json({ message: "Application deleted" });
  } catch (err) { next(err); }
};