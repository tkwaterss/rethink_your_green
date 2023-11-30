const { Story } = require("../util/models");
const { Op } = require("sequelize");

module.exports = {
  getStories: async (req, res) => {
    try {
      const stories = await Story.findAll({
        limit: 6,
      });
      res.status(200).send(stories);
    } catch (err) {
      console.log(err, "error in getStories");
      res.sendStatus(400);
    }
  },
  addStory: async (req, res) => {
    try {
      const newStory = await Story.create(req.body);
      res.status(200).send(newStory);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
  editStory: async (req, res) => {
    const { storyId } = req.params;
    try {
      const story = await Story.findByPk(storyId);
      await story.set(req.body);
      await story.save();
      res.sendStatus(200);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
  deleteStory: async (req, res) => {
    const { storyId } = req.params;
    try {
      await Story.destroy({ where: { id: +storyId } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err, "error in ");
      res.sendStatus(400);
    }
  },
};
