import pool from "../config/db.js";

// Create Application
export const createApplication = async (data, file) => {
  const sql = `
    INSERT INTO job_applications 
    (full_name, email, phone, experience, skills, tenth_percentage, twelfth_percentage,
     graduation_percentage, college_name, branch, resume, resume_type)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.full_name,
    data.email,
    data.phone,
    data.experience,
    data.skills,
    data.tenth_percentage,
    data.twelfth_percentage,
    data.graduation_percentage,
    data.college_name,
    data.branch,
    file ? file.buffer : null,
    file ? file.mimetype : null,
  ];

  const [result] = await pool.execute(sql, values);
  return result;
};

// Get All Applications
export const getAllApplicationsFull = async () => {
  const [rows] = await pool.execute(`
    SELECT 
      id,
      full_name,
      email,
      phone,
      experience,
      skills,
      tenth_percentage,
      twelfth_percentage,
      graduation_percentage,
      college_name,
      branch,
      status,
      created_at
    FROM job_applications
    ORDER BY created_at DESC
  `);

  return rows;
};

// Get Resume by ID
export const getResumeById = async (id) => {
  const [rows] = await pool.execute(
    "SELECT resume, resume_type FROM job_applications WHERE id = ?",
    [id]
  );
  return rows[0];
};

// Update Status
export const updateStatus = async (id, status) => {
  const [result] = await pool.execute(
    "UPDATE job_applications SET status = ? WHERE id = ?",
    [status, id]
  );
  return result;
};

// Delete Application
export const deleteApplicationById = async (id) => {
  const [result] = await pool.execute(
    "DELETE FROM job_applications WHERE id = ?",
    [id]
  );
  return result.affectedRows;
};