"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, unique: true, allowNull: false },
      role: {
        type: Sequelize.ENUM("ADMIN", "TEACHER", "STUDENT", "PARENT", "TECH"),
        allowNull: false,
      },
      passwordHash: { type: Sequelize.STRING, allowNull: false },
      joinedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
