'use strict';
const {
  Model
} = require('sequelize');
const article = require('./article');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Article, {
        foreignKey: {
          name: 'author_id',
          field: 'author_id',},
        as: 'article'
      })
    }
  }
  
  Author.init({
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true, 
      allowNull: false 
    }, 
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};