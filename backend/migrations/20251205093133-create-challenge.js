"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Challenges", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: { type: Sequelize.STRING, allowNull: false },
      type: {
        type: Sequelize.ENUM("Quiz", "Scenario", "Task"),
        allowNull: false,
      },
      points: { type: Sequelize.INTEGER, defaultValue: 0 },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Challenges");
  },
};
