//^ Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./util/database");
const seed = require("./util/seed");
// const path = require("path");

const {
  getBlogs,
  getBlogById,
  addBlog,
  editBlog,
  deleteBlog,
} = require("./controllers/blogs");
const {
  getContacts,
  searchContacts,
  getContactById,
  addContact,
  editContact,
  deleteContact,
} = require("./controllers/contacts");
const { login, register } = require('./controllers/auth');

//^ Variables

const server = express();
const { PORT } = process.env;

//^ Middleware

server.use(express.json());
server.use(cors());
// server.use(express.static(path.join(__dirname, "../src")));

//^ Endpoints

server.post('/login', login);
server.post('/register', register);

server.get("/blogs", getBlogs);
server.get("/blogs/:blogId", getBlogById);
server.post("/blogs", addBlog);
server.put("/blogs/:blogId", editBlog);
server.delete("/blogs/:blogId", deleteBlog);

server.get('/contacts', getContacts);
server.get("/contact/:contactId", getContactById);
server.get("/search/contacts", searchContacts);
server.post("/contacts", addContact);
server.put("/contacts/:contactId", editContact);
server.delete("/contacts/:contactId", deleteContact);

//^ Database sycn and seed
db
  .sync()
  // .sync({ force: true })
  .then(() => {
    // seed();
  })
  .catch((err) => console.log(err, "could not connect"));

server.listen(PORT, () => console.log(`========== Up on ${PORT} ==========`));
