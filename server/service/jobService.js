import {
  createApplication,
  getAllApplicationsFull,
  getResumeById,
  updateStatus,
  deleteApplicationById,
} from "../repository/jobRepo.js";

export const createApplicationService = async (data, file) => {
  if (!data.full_name || !data.email || !data.phone) {
    throw new Error("Required fields missing");
  }

  return await createApplication(data, file);
};

export const getApplicationsFullService = async () => {
  return await getAllApplicationsFull();
};

export const getResumeService = async (id) => {
  const resume = await getResumeById(id);
  if (!resume) throw new Error("Resume not found");
  return resume;
};

export const updateStatusService = async (id, status) => {
  const valid = ["PENDING", "APPROVED", "REJECTED"];
  if (!valid.includes(status)) throw new Error("Invalid status");
  return await updateStatus(id, status);
};

export const deleteApplicationService = async (id) => {
  const affected = await deleteApplicationById(id);
  if (!affected) { const e = new Error("Application not found"); e.statusCode = 404; throw e; }
  return true;
};