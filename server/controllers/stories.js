const { Story } = require("../util/models");
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
  addStory: async (req, res) => {
    
  },
  editStory: async (req, res) => {

  },
  deleteStory: async (req, res) => {

  }
};
