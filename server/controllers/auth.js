require("dotenv").config();
const { Admin } = require("../util/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET } = process.env;

const createToken = (email, id) => {
  return jwt.sign({ email, id }, SECRET, { expiresIn: "2 days" });
};

module.exports = {
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
            userId: admin.dataValues.id,
            token: token,
            exp: exp,
            employee: admin.dataValues.employee,
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