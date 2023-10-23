'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admins extends Model {
 
    static associate(models) {
      this.hasMany(models.assets, {
        foreignKey: `admin_id`
      })
    }
  }
  admins.init({
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    full_name: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admins',
  });
  return admins;
};