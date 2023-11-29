const { Contact } = require("../util/models");
const { Op } = require("sequelize");

module.exports = {
  //get 20 contacts - will want to get all and pagify at some point
  getContacts: async (req, res) => {
    try {
      const contacts = await Contact.findAll({
        limit: 10,
      });
      res.status(200).send(contacts);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
  //search contacts by email? name?
  searchContacts: async (req, res) => {
    let { email } = req.query;
    try {
      const contacts = await Contact.findAll({
        where: { email: email },
      });
      res.status(200).send(contacts);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
  //get contact details by Id
  getContactById: async (req, res) => {
    const contactId = req.params;
    try {
      const contact = await Contact.findByPk(contactId);
      res.status(200).send(contact);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
  //add new contact
  addContact: async (req, res) => {
    try {
      const newContact = await Contact.create(req.body);
      res.status(200).send(newContact);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
  //update contact by Id
  editContact: async (req, res) => {
    const { contactId } = req.params;
    try {
      const contact = await Contact.findByPk(contactId);
      await contact.set(req.body);
      await contact.save();
      res.sendStatus(200);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
  //delete contact by Id
  deleteContact: async (req, res) => {
    const { contactId } = req.params;
    try {
      await Contact.destroy({ where: { id: +contactId } });
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
};
