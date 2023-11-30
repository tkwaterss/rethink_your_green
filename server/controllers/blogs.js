const { Blog } = require("../util/models");
const { Op } = require("sequelize");

module.exports = {
  getBlogs: async (req, res) => {
    try {
      const blogs = await Blog.findAll({
        limit: 6,
      });
      res.status(200).send(blogs);
    } catch (err) {
      console.log(err, "error in getBlogs");
      res.sendStatus(400);
    }
  },
  addBlog: async (req, res) => {
    try {
      const newBlog = await Blog.create(req.body);
      res.satus(200).send(newBlog);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
  editBlog: async (req, res) => {
    const { blogId } = req.params;
    try {
      const blog = await Blog.findByPk(blogId);
      await blog.set(req.body);
      await blog.save();
      res.sendStatus(200);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
  deleteBlog: async (req, res) => {
    const { blogId } = req.params;
    try {
      await Blog.destroy({ where: { id: +blogId } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
};
