import axiosInstance from "./axiosInstance";

/** GET /api/jobs/  — all job applications (protected) */
export const getJobApplicationsApi = async () => {
  const { data } = await axiosInstance.get("/api/jobs/");
  return data;
};

/** GET /api/projects/get-all  — all project inquiries (protected) */
export const getProjectRequestsApi = async () => {
  const { data } = await axiosInstance.get("/api/projects/get-all");
  return data;
};

/** GET /api/projects/jobs  — all job postings (public) */
export const getJobPostingsApi = async () => {
  const { data } = await axiosInstance.get("/api/projects/jobs");
  return data;
};

/** POST /api/projects/create-job  — create job posting (protected) */
export const createJobPostingApi = async (jobData) => {
  const { data } = await axiosInstance.post("/api/projects/create-job", jobData);
  return data;
};

/** PUT /api/projects/jobs/:id  — update job posting (protected) */
export const updateJobPostingApi = async (id, jobData) => {
  const { data } = await axiosInstance.put(`/api/projects/jobs/${id}`, jobData);
  return data;
};

/** DELETE /api/projects/jobs/:id  — delete job posting (protected) */
export const deleteJobPostingApi = async (id) => {
  const { data } = await axiosInstance.delete(`/api/projects/jobs/${id}`);
  return data;
};

/** PUT /api/jobs/:id/status  — update application status (protected) */
export const updateApplicationStatusApi = async (id, status) => {
  const { data } = await axiosInstance.put(`/api/jobs/${id}/status`, { status });
  return data;
};

/** PUT /api/projects/:id/status  — update project request status (protected) */
export const updateProjectReqStatusApi = async (id, status) => {
  const { data } = await axiosInstance.put(`/api/projects/${id}/status`, { status });
  return data;
};

/** DELETE /api/projects/:id  — delete project request (protected) */
export const deleteProjectRequestApi = async (id) => {
  const { data } = await axiosInstance.delete(`/api/projects/${id}`);
  return data;
};
