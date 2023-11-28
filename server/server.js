//^ Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./util/database");
const seed = require("./util/seed");
const { Contact, Story, Blog } = require("./util/models");
const path = require("path");

const { getStories, getBlogs } = require("./controllers/content");

//^ Variables

const server = express();
const { PORT } = process.env;

//^ Middleware

server.use(express.json());
server.use(cors());
// server.use(express.static(path.join(__dirname, "../src")));

//^ Endpoints
server.get("/stories", getStories);
server.get("/blogs", getBlogs);

//^ Database sycn and seed
db.sync()
  // .sync({ force: true })
  .then(() => {
    // seed();
  })
  .catch((err) => console.log(err, "could not connect"));

server.listen(PORT, () => console.log(`========== Up on ${PORT} ==========`));
