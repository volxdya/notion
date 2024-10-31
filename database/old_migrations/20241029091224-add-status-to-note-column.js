'use strict';


const noteStatutes = [
  {
    id: 1,
    status: "In order",
  },

  {
    id: 2,
    status: "In work",
  },
  {
    id: 3,
    status: "On check",
  },
  {
    id: 4,
    status: "Done",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('notes', 'status', {
      type: Sequelize.JSON,
      defaultValue: noteStatutes[0]
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
