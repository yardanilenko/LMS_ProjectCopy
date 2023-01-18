'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'Answers',
        'vote_id',{
          type: Sequelize.INTEGER,
        })
  },

  async down (queryInterface) {
    queryInterface.removeColumn(
        'Answers',
        'vote_id')
  }
};
