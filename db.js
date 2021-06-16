const Sequelize = require("sequelize");

const PostModel = require("./models/Posts");

const sequelize = new Sequelize("2HPGLpTSyN", "2HPGLpTSyN", "Q3RYcAAsRe", {
  host: 'remotemysql.com',
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