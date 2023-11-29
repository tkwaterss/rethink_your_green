const { Blog } = require("../util/models");
const { Op } = require("sequelize");

module.exports = {
    getBlogs: async (req, res) => {
    try {
      const blogs = await Blog.findAll({
        limit: 4,
      });
      res.status(200).send(blogs);
    } catch (err) {
      console.log(err, "error in getBlogs");
      res.sendStatus(400);
    }
  },
  addBlog: async (req, res) => {

  },
  editBlog: async (req, res) => {

  },
  deleteBlog: async (req, res) => {
    
  }
};
