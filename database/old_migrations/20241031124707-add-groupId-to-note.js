'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('notes', 'groupId', {
      type: Sequelize.INTEGER,
    });
  },
};
