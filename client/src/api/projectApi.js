import axiosInstance from "./axiosInstance";

// ─── Project Inquiry ──────────────────────────────────────────────────────────

/**
 * Submit a new project inquiry (Public route — no auth needed)
 * POST /api/projects/create
 *
 * @param {{ full_name, company_name, email, phone, inquiry_type, service_required, message }} data
 * @returns {Promise<{ success, message, requestId }>}
 */
export const createProjectRequestApi = async (data) => {
  const { data: response } = await axiosInstance.post(
    "/api/projects/create",
    data
  );
  return response;
};

/**
 * Get all project inquiries (Protected — login required)
 * GET /api/projects/get-all
 */
export const getAllProjectRequestsApi = async () => {
  const { data } = await axiosInstance.get("/api/projects/get-all");
  return data;
};

/**
 * Update inquiry status (Protected — login required)
 * PUT /api/projects/:id/status
 *
 * @param {number} id
 * @param {"PENDING"|"APPROVED"|"REJECTED"} status
 */
export const updateProjectStatusApi = async (id, status) => {
  const { data } = await axiosInstance.put(`/api/projects/${id}/status`, {
    status,
  });
  return data;
};

// ─── Job Opportunities ────────────────────────────────────────────────────────

/**
 * Create a job posting (Protected — login required)
 * POST /api/projects/create-job
 */
export const createJobApi = async (jobData) => {
  const { data } = await axiosInstance.post(
    "/api/projects/create-job",
    jobData
  );
  return data;
};

/**
 * Get all job postings (Public)
 * GET /api/projects/jobs
 */
export const getAllJobsApi = async () => {
  const { data } = await axiosInstance.get("/api/projects/jobs");
  return data;
};
