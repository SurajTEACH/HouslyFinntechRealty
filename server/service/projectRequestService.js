import {
  createJob,
  createProjectRequest,
  getAllJobs,
  getAllProjectRequests,
  updateProjectStatus,
  deleteJobById,
  updateJobById,
  deleteProjectRequestById,
} from "../repository/projectRepo.js";

// ─── Allowed Enum Values ─────────────────────────────────────────────────────

const VALID_INQUIRY_TYPES = [
  "New Project",
  "Free Consultation",
  "Technical Support",
  "Business Partnership",
  "General Inquiry",
];

const VALID_SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
  "AI & Machine Learning",
  "Cybersecurity",
  "DevOps & Automation",
  "Custom Software",
];

// ─── Project Request Service ─────────────────────────────────────────────────

export const createProjectRequestService = async (data) => {
  const { full_name, email, inquiry_type, service_required, message } = data;

  // Required field checks
  if (!full_name || !email || !inquiry_type || !service_required || !message) {
    throw new Error(
      "Required fields missing: full_name, email, inquiry_type, service_required, message"
    );
  }

  // Enum validation
  if (!VALID_INQUIRY_TYPES.includes(inquiry_type)) {
    throw new Error(
      `Invalid inquiry_type. Allowed values: ${VALID_INQUIRY_TYPES.join(", ")}`
    );
  }

  if (!VALID_SERVICES.includes(service_required)) {
    throw new Error(
      `Invalid service_required. Allowed values: ${VALID_SERVICES.join(", ")}`
    );
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email address format");
  }

  const result = await createProjectRequest(data);
  return result;
};

export const getAllProjectRequestsService = async () => {
  return await getAllProjectRequests();
};

export const updateStatusService = async (id, status) => {
  const validStatus = ["PENDING", "APPROVED", "REJECTED"];

  if (!validStatus.includes(status)) {
    throw new Error(
      `Invalid status value. Allowed: ${validStatus.join(", ")}`
    );
  }

  return await updateProjectStatus(id, status);
};

// ─── Job Service ─────────────────────────────────────────────────────────────

export const createJobService = async (data) => {
  const { 
    title, 
    company, 
    type, 
    location, 
    locationType,
    description, 
    postedDate,
    isNew,
    salary,
    aboutCompany,
    responsibilities,
    requirements,
    gains
  } = data;

  if (!title || !company || !type || !location || !description) {
    throw new Error("Title, company, type, location, and description are required");
  }

  if (responsibilities && !Array.isArray(responsibilities)) {
    throw new Error("responsibilities must be an array of strings");
  }

  if (requirements && !Array.isArray(requirements)) {
    throw new Error("requirements must be an array of strings");
  }

  if (gains && !Array.isArray(gains)) {
    throw new Error("gains must be an array of strings");
  }

  // Set default values if necessary before passing to Repo
  const jobData = {
    title,
    company,
    type,
    location,
    locationType: locationType || 'remote',
    description,
    postedDate: postedDate || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    isNew: isNew ?? true,
    salary: salary || 'Negotiable',
    aboutCompany: aboutCompany || '',
    responsibilities: responsibilities || [],
    requirements: requirements || [],
    gains: gains || []
  };

  return await createJob(jobData);
};

export const getJobsService = async () => {
  const jobs = await getAllJobs();
  return jobs;
};

// ─── Delete Job Service ────────────────────────────────────────────────────────────
export const deleteJobService = async (id) => {
  const affected = await deleteJobById(id);
  if (!affected) {
    const err = new Error("Job not found");
    err.statusCode = 404;
    throw err;
  }
  return true;
};

// ─── Update Job Service ────────────────────────────────────────────────────────────
export const updateJobService = async (id, data) => {
  if (!data.title || !data.company || !data.type || !data.location || !data.description) {
    const err = new Error("Title, company, type, location, and description are required");
    err.statusCode = 400;
    throw err;
  }
  const jobData = {
    title: data.title,
    company: data.company,
    type: data.type,
    location: data.location,
    locationType: data.locationType || "remote",
    description: data.description,
    salary: data.salary || "Negotiable",
    aboutCompany: data.aboutCompany || "",
    responsibilities: Array.isArray(data.responsibilities) ? data.responsibilities : (data.responsibilities || "").split("\n").filter(Boolean),
    requirements: Array.isArray(data.requirements) ? data.requirements : (data.requirements || "").split("\n").filter(Boolean),
    gains: Array.isArray(data.gains) ? data.gains : (data.gains || "").split("\n").filter(Boolean),
  };
  return await updateJobById(id, jobData);
};

// ─── Delete Project Request Service ─────────────────────────────────────────────────
export const deleteProjectRequestService = async (id) => {
  const affected = await deleteProjectRequestById(id);
  if (!affected) {
    const err = new Error("Project request not found");
    err.statusCode = 404;
    throw err;
  }
  return true;
};