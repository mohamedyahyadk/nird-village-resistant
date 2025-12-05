"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    static associate(models) {
      School.hasMany(models.User, { foreignKey: "schoolId" });
    }
  }
  School.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      nirdScore: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "School",
    }
  );
  return School;
};
