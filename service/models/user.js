'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/hashPass');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    full_name: DataTypes.STRING,
    nick_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.DATE,
    address: DataTypes.STRING,
    role: DataTypes.STRING,
    photo: DataTypes.STRING,
    approval: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, opt) {
        user.password = hashPassword(user.password);
      }
    }
  });
  return User;
};