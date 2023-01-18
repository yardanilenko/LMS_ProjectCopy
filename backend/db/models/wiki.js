'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wiki extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {

    // }
  }
  Wiki.init({
    name: DataTypes.TEXT,
    page: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Wiki',
  });
  return Wiki;
};