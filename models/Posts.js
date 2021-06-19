module.exports = (sequelize, type) => {
  return sequelize.define('post', {
    id:{
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    content: type.STRING,
    imgurl: type.STRING,
    category: type.STRING,
    creationDate: type.DATE,
  })
};