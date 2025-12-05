"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, { foreignKey: "userId" });
      User.hasMany(models.Contribution, { foreignKey: "userId" });
      User.hasMany(models.Resource, { foreignKey: "authorId" });
      User.belongsTo(models.School, { foreignKey: "schoolId" });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      schoolId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Schools",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      role: DataTypes.ENUM("ADMIN", "TEACHER", "STUDENT", "PARENT", "TECH"),
      passwordHash: DataTypes.STRING,
      joinedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
