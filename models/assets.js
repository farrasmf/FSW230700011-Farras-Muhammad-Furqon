'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class assets extends Model {

    static associate(models) {
      this.belongsTo(models.admins, {
        foreignKey: `admin_id`
      })
    }

  }
  assets.init({
    admin_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    photos: DataTypes.STRING,
    coordinate: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'assets',
  });
  return assets;
};