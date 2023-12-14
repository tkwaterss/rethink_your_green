require("dotenv").config();
const { Admin } = require("../util/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET } = process.env;

const createToken = (email, id) => {
  return jwt.sign({ email, id }, SECRET, { expiresIn: "2 days" });
};

module.exports = {
  register: async (req, res) => {
    console.log(req.body);
    try {
      const { firstname, lastname, email, password, phone } =
        req.body;

      //checking if account exists, if so then prompt to login or try different email
      const emailExists = await Admin.findOne({ where: { email } });
      const phoneExists = await Admin.findOne({ where: { phone } });
      if (emailExists) {
        res.status(400).send("An account using that email already exists");
      } else if (phoneExists) {
        res.status(400).send("An account with that phone number already exists");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newAdmin = await Admin.create({
          firstname: firstname,
          lastname: lastname,
          email: email,
          hashedPass: hash,
          phone: phone,
        });

        const token = createToken(
          newAdmin.dataValues.email,
          newAdmin.dataValues.id
        );

        const exp = Date.now() + 1000 * 60 * 60 * 48;

        res.status(201).send({
          email: newAdmin.dataValues.email,
          AdminId: newAdmin.dataValues.id,
          token: token,
          exp: exp,
        });
      }
    } catch (err) {
      console.log("Error in register");
      console.log(err);
      res.sendStatus(400);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).send("Please fill out both fields");
        return;
      }

      const admin = await Admin.findOne({ where: { email } });
      console.log(admin);
      if (admin) {
        const isAuthenticated = bcrypt.compareSync(password, admin.hashedPass);
        console.log(isAuthenticated);
        if (isAuthenticated) {
          const token = createToken(admin.dataValues.email, admin.dataValues.id);
          const exp = Date.now() + 1000 * 60 * 60 * 48;
          res.status(200).send({
            email: admin.dataValues.email,
            AdminId: admin.dataValues.id,
            token: token,
            exp: exp,
          });
        } else {
          res.status(400).send("Unable to Authenticate");
        }
      } else {
        res.status(400).send("No admin with that email address exists");
      }
    } catch (err) {
      console.log("Error in login");
      console.log(err);
      res.sendStatus(400);
    }
  },
};