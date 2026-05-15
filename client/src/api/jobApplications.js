import axiosInstance from "./axiosInstance";

/** POST /api/jobs/apply — Submit application (public, multipart) */
export const applyForJobApi = async (formData) => {
  const { data } = await axiosInstance.post("/api/jobs/apply", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

/** GET /api/jobs/ — Get all applications (protected) */
export const getAllApplicationsApi = async () => {
  const { data } = await axiosInstance.get("/api/jobs/");
  return data; // { message, data: [...] }
};

/** PUT /api/jobs/:id/status — Update application status (protected) */
export const updateApplicationStatusApi = async (id, status) => {
  const { data } = await axiosInstance.put(`/api/jobs/${id}/status`, { status });
  return data;
};

/** DELETE /api/jobs/:id — Delete application (protected) */
export const deleteApplicationApi = async (id) => {
  const { data } = await axiosInstance.delete(`/api/jobs/${id}`);
  return data;
};

/** Resume URL — opens directly in browser (protected via token not needed, served by backend) */
export const getResumeUrl = (id) => `/api/jobs/resume/${id}`;

