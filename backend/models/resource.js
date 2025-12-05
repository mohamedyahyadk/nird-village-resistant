// models/resource.js
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    static associate(models) {
      Resource.belongsTo(models.User, { foreignKey: "authorId" });
      Resource.hasMany(models.Contribution, { foreignKey: "resourceId" });
    }
  }
  Resource.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      authorId: { type: DataTypes.UUID, allowNull: false },
      license: DataTypes.STRING,
      tags: DataTypes.ARRAY(DataTypes.STRING),
      fileUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Resource",
    }
  );
  return Resource;
};
