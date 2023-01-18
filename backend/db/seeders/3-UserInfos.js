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
      { name: 'Лена2', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даша3', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена4', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даша5', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена6', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даша7', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена8', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даша9', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена10', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даша', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даша', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даша', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даша', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даша', surname: 'Иванова', user_id: '6', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена', surname: 'Петрова', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лена', surname: 'Лишняя', user_id: '7', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
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
