//^ Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./util/database");
const seed = require("./util/seed");
const { Contact, Story, Blog } = require("./util/models");

//^ Variables

const server = express();
const { PORT } = process.env;

//^ Middleware

server.use(express.json());
server.use(cors());

//^ Database sycn and seed
db
  .sync()
  // .sync({ force: true })
  .then(() => {
    // seed();
  })
  .catch((err) => console.log(err, "could not connect"));

server.listen(PORT, () => console.log(`========== Up on ${PORT} ==========`));
