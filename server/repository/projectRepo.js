import pool from "../config/db.js";

// ─── Project Inquiry ─────────────────────────────────────────────────────────

export const createProjectRequest = async (data) => {
  const sql = `
    INSERT INTO project_requests
    (full_name, company_name, email, phone, inquiry_type, service_required, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.full_name,
    data.company_name || null,
    data.email,
    data.phone || null,
    data.inquiry_type,
    data.service_required,
    data.message,
  ];

  const [result] = await pool.execute(sql, values);
  return result;
};

export const getAllProjectRequests = async () => {
  const [rows] = await pool.execute(
    "SELECT * FROM project_requests ORDER BY created_at DESC"
  );
  return rows;
};

export const updateProjectStatus = async (id, status) => {
  const [result] = await pool.execute(
    "UPDATE project_requests SET status = ? WHERE id = ?",
    [status, id]
  );
  return result;
};

// ─── Job Opportunities ───────────────────────────────────────────────────────

export const createJob = async (data) => {
  const sql = `
    INSERT INTO job_opportunities 
    (title, company, type, location, locationType, description, postedDate, isNew, salary, aboutCompany, responsibilities, requirements, gains)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.title,
    data.company,
    data.type,
    data.location,
    data.locationType,
    data.description,
    data.postedDate || null,
    data.isNew ? 1 : 0,
    data.salary,
    data.aboutCompany,
    JSON.stringify(data.responsibilities || []),
    JSON.stringify(data.requirements || []),
    JSON.stringify(data.gains || [])
  ];

  const [result] = await pool.execute(sql, values);
  return result;
};

export const getAllJobs = async () => {
  const [rows] = await pool.execute(
    "SELECT * FROM job_opportunities ORDER BY created_at DESC"
  );
  
  // Parse JSON fields back to arrays
  return rows.map(row => ({
    ...row,
    responsibilities: typeof row.responsibilities === 'string' ? JSON.parse(row.responsibilities) : row.responsibilities,
    requirements: typeof row.requirements === 'string' ? JSON.parse(row.requirements) : row.requirements,
    gains: typeof row.gains === 'string' ? JSON.parse(row.gains) : row.gains,
    isNew: row.isNew === 1
  }));
};

// delete  jobpost 
export const deleteJobById = async (id) => {
  const [result] = await pool.execute("DELETE FROM job_opportunities WHERE id = ?", [id]);
  return result.affectedRows;
};

// update job 
export const updateJobById = async (id, data) => {
  const sql = `
    UPDATE job_opportunities SET
      title = ?, company = ?, type = ?, location = ?, locationType = ?,
      description = ?, salary = ?, aboutCompany = ?,
      responsibilities = ?, requirements = ?, gains = ?
    WHERE id = ?
  `;
  const values = [
    data.title, data.company, data.type, data.location, data.locationType,
    data.description, data.salary, data.aboutCompany,
    JSON.stringify(data.responsibilities || []),
    JSON.stringify(data.requirements || []),
    JSON.stringify(data.gains || []),
    id,
  ];
  const [result] = await pool.execute(sql, values);
  return result;
};

// delete project request
export const deleteProjectRequestById = async (id) => {
  const [result] = await pool.execute("DELETE FROM project_requests WHERE id = ?", [id]);
  return result.affectedRows;
};