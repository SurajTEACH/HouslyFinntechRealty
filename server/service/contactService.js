import { createContact, getAllContacts } from "../repository/contactRepo.js";

export const createContactService = async (data) => {
  const { name, email, phone, description } = data;

  if (!name || !email || !phone || !description) {
    throw new Error("All fields are required");
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // Phone validation (10 digit)
  if (phone.length < 10) {
    throw new Error("Invalid phone number");
  }

  return await createContact(data);
};

export const getContactsService = async () => {
  return await getAllContacts();
};