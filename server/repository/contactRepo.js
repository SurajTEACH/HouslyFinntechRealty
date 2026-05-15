import pool from "../config/db.js";

// Create Contact Message
export const createContact = async (data) => {
  const sql = `
    INSERT INTO contact_us (name, email, phone, description)
    VALUES (?, ?, ?, ?)
  `;

  const values = [
    data.name,
    data.email,
    data.phone,
    data.description,
  ];

  const [result] = await pool.execute(sql, values);
  return result;
};

// Get All Contacts (Admin use)
export const getAllContacts = async () => {
  const [rows] = await pool.execute(
    "SELECT * FROM contact_us ORDER BY created_at DESC"
  );
  return rows;
};