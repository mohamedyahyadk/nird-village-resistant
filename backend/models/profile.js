"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Profile.init(
    {
      userId: { type: DataTypes.UUID, allowNull: false },
      school: DataTypes.STRING,
      roleDetail: DataTypes.STRING,
      bio: DataTypes.TEXT,
      avatarUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
