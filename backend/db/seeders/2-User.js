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
      { login: 'DashaIvanova', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'LenPetrova', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'EvgeniiMoroz', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'FedotGrig', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'SerafimaSemenova', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'GaliEgorova', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'VasiKulikov', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'TomaSokolova', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'LidNovikova', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'MitGrigor', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'SvetaAnt', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'YulVas', password: encryptedPassword, role: 'student', group_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { login: 'TimurVorobyov', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'DemyanEgorov', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'KostVlas', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'VasyaStep', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'LyubaSokolova', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'AleksIli', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'AlisKoval', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'FedTaras', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'VladEgo', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'KonstMikh', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'SofBelova', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'MefVlasov', password: encryptedPassword, role: 'student', group_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { login: 'BoriFrol', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'AnatKuz', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'RaisNovik', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'TatSokol', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'AntonSerg', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'KirKoval', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'MirNovi', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'KostZhuk', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'EfimMikh', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'LevKozl', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'EkaKulik', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'IlyaPop', password: encryptedPassword, role: 'student', group_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { login: 'MikhVin', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'EfrPetr', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'KirPop', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'NonLeb', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'GogKuzn', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'MitKorol', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'PetrZakh', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'EvaAnt', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'AnnBel', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'SonSmol', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'RodGus', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'ZoyaIvanova', password: encryptedPassword, role: 'student', group_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { login: 'MatLeb', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'LeoSkol', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'YakOrl', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'TerBar', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'KolBori', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'BorNiko', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'LyubVolk', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'VadNovi', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'GenMak', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'GalSol', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'ZakhRom', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { login: 'LevVin', password: encryptedPassword, role: 'student', group_id: 5, createdAt: new Date(), updatedAt: new Date() },
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
