module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('UserInfos', [
      { name: 'Даша', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserInfos', null, {});
  },
};
