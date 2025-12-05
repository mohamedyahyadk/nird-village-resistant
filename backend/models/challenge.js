"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {}
  Challenge.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      type: DataTypes.ENUM("Quiz", "Scenario", "Task"),
      points: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    { sequelize, modelName: "Challenge" }
  );
  return Challenge;
};
