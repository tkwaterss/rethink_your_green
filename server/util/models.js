const { DataTypes } = require('sequelize');
const db = require('./database');

module.exports = {
  Contact: db.define("contact", {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstname: DataTypes.STRING(50),
    lastname: DataTypes.STRING(50),
    email: DataTypes.STRING,
    phone: DataTypes.STRING(10),
    address: DataTypes.STRING,
    newsletter: DataTypes.BOOLEAN,
    lead: DataTypes.BOOLEAN,
    notes: DataTypes.TEXT,
  }),
  Story: db.define("story", {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    storyTitle: DataTypes.STRING,
    storyDescription: DataTypes.TEXT,
    storyPhoto: DataTypes.TEXT,
  }),
  Blog: db.define("blog", {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    blogTitle: DataTypes.STRING,
    blogDescription: DataTypes.TEXT,
    blogPhoto: DataTypes.TEXT,
    blogLink: DataTypes.STRING,
  })
}