const { Story, Blog } = require("../util/models");
const { Op } = require("sequelize");

module.exports = {
  getStories: async (req, res) => {
    try {
      const stories = await Story.findAll({
        limit: 4,
      });
      res.status(200).send(stories);
    } catch (err) {
      console.log(err, "error in getStories");
      res.sendStatus(400);
    }
  },
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
};
