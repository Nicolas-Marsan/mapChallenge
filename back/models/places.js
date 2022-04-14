"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Maps extends Model {
    static associate(models) {}
  }
  Maps.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      coordx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      coordy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "places",
      tableName: "places",
      timestamps: false,
      paranoid: false,
    }
  );
  return Maps;
};
