require('dotenv').config()

const Sequelize = require("sequelize");

const PostModel = require("./models/Posts");

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
  host: process.env.HOST,
  dialect: "mysql"
});

const Post = PostModel(sequelize, Sequelize);

sequelize.sync({force: false})
  .then(() => {
    console.log("Sync success")
  });

  module.exports = {
    Post
  }