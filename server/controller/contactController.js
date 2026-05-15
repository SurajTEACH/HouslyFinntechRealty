import {
  createContactService,
  getContactsService,
} from "../service/contactService.js";

// Submit Contact Form
export const createContact = async (req, res, next) => {
  try {
    const result = await createContactService(req.body);

    res.status(201).json({
      message: "Message sent successfully",
      id: result.insertId,
    });

  } catch (err) {
    next(err);
  }
};

// Get All Messages (Admin)
export const getContacts = async (req, res, next) => {
  try {
    const data = await getContactsService();

    res.json({
      message: "Contacts fetched successfully",
      data,
    });

  } catch (err) {
    next(err);
  }
};