const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const encryptedPassword = await bcrypt.hash('1234', 10);

    await queryInterface.bulkInsert('Users', [
      { login: 'Vasja', password: encryptedPassword, role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Petya', password: encryptedPassword, role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Kolya', password: encryptedPassword, role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Fedya', password: encryptedPassword, role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Masha', password: encryptedPassword, role: 'teacher', group_id: undefined, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Dasha', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Lena', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Sasha', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Ilya', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Vasja2', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Petya2', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Kolya2', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Fedya2', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Masha2', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Dasha2', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Lena2', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Sasha2', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Ilya2', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Vasja3', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Petya3', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Kolya3', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Fedya3', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Masha3', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Dasha3', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Lena3', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Sasha3', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Ilya3', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Dasha4', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'Lena4', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
