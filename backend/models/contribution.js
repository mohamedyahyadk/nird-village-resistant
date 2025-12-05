"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contribution extends Model {
    static associate(models) {
      Contribution.belongsTo(models.User, { foreignKey: "userId" });
      Contribution.belongsTo(models.Resource, { foreignKey: "resourceId" });
    }
  }
  Contribution.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: { type: DataTypes.UUID, allowNull: false },
      resourceId: { type: DataTypes.UUID, allowNull: false },
      status: DataTypes.ENUM("Pending", "Approved", "Rejected"),
      submitDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    { sequelize, modelName: "Contribution" }
  );
  return Contribution;
};
