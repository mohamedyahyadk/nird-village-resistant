"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Contributions", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Users", key: "id" },
        onDelete: "CASCADE",
      },
      resourceId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Resources", key: "id" },
        onDelete: "CASCADE",
      },
      status: {
        type: Sequelize.ENUM("Pending", "Approved", "Rejected"),
        defaultValue: "Pending",
      },
      submitDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Contributions");
  },
};
