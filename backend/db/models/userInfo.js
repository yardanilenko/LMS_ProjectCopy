'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Group, { foreignKey: 'group_id' });
    }
  }
  UserInfo.init({
    name: DataTypes.TEXT,
    surname: DataTypes.TEXT,
    city: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    telegram: DataTypes.TEXT,
    github: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    email: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserInfo',
  });
  return UserInfo;
};
