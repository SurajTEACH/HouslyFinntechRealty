import axiosInstance from "./axiosInstance";

/** GET /api/projects/jobs — all job postings (Public) */
export const getAllJobsApi = async () => {
  const { data } = await axiosInstance.get("/api/projects/jobs");
  return data;
};

/** PUT /api/projects/jobs/:id — update job posting (protected) */
export const updateJobApi = async (id, jobData) => {
  const { data } = await axiosInstance.put(`/api/projects/jobs/${id}`, jobData);
  return data;
};

/** DELETE /api/projects/jobs/:id — delete job posting (protected) */
export const deleteJobApi = async (id) => {
  const { data } = await axiosInstance.delete(`/api/projects/jobs/${id}`);
  return data;
};

