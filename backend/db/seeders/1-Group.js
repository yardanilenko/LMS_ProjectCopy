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
    await queryInterface.bulkInsert('Groups', [
      { name: 'Еноты', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Волки', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лисы', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Бобры', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Медведи', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Groups', null, {});
  },
};
