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
    await queryInterface.bulkInsert('Users', [
      { login: 'Vasja', password: '123', role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Petya', password: '123', role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Kolya', password: '123', role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Fedya', password: '123', role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Masha', password: '123', role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Dasha', password: '123', role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Lena', password: '123', role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Sasha', password: '123', role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Ilya', password: '123', role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Vasja2', password: '123', role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Petya2', password: '123', role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Kolya2', password: '123', role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Fedya2', password: '123', role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Masha2', password: '123', role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Dasha2', password: '123', role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Lena2', password: '123', role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Sasha2', password: '123', role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Ilya2', password: '123', role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Vasja3', password: '123', role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Petya3', password: '123', role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Kolya3', password: '123', role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Fedya3', password: '123', role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Masha3', password: '123', role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Dasha3', password: '123', role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Lena3', password: '123', role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Sasha3', password: '123', role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Ilya3', password: '123', role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Dasha4', password: '123', role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Lena4', password: '123', role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },     
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
