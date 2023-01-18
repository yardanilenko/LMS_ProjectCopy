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
      { name: 'Евгений', surname: 'Морозов', user_id: '8', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Федот', surname: 'Григорьев', user_id: '9', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Серафима', surname: 'Семенова', user_id: '10', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Галина', surname: 'Егорова', user_id: '11', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Василий', surname: 'Куликов', user_id: '12', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Тома', surname: 'Соколова', user_id: '13', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лидия', surname: 'Новикова', user_id: '14', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Митя', surname: 'Григорьев', user_id: '15', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Света', surname: 'Антонова', user_id: '16', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Юлия', surname: 'Васильева', user_id: '17', group_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Тимур', surname: 'Воробьев', user_id: '18', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Демьян', surname: 'Егоров', user_id: '19', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Костя', surname: 'Власов', user_id: '20', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Вася', surname: 'Степанов', user_id: '21', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Люба', surname: 'Соколова', user_id: '22', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Александр', surname: 'Ильин', user_id: '23', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Алиса', surname: 'Ковалева', user_id: '24', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Федор', surname: 'Тарасов', user_id: '25', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Влад', surname: 'Егоров', user_id: '26', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Константин', surname: 'Михайлов', user_id: '27', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Софья', surname: 'Белова', user_id: '28', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Мефодий', surname: 'Власов', user_id: '29', group_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Борислав', surname: 'Фролов', user_id: '30', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Анатолий', surname: 'Кузьмин', user_id: '31', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Раиса', surname: 'Новикова', user_id: '32', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Татьяна', surname: 'Соколова', user_id: '33', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Антон', surname: 'Сергеев', user_id: '34', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Кирилл', surname: 'Ковалев', user_id: '35', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Мирон', surname: 'Новиков', user_id: '36', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Костя', surname: 'Жуков', user_id: '37', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ефим', surname: 'Михайлов', user_id: '38', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лев', surname: 'Козлов', user_id: '39', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Екатерина', surname: 'Куликова', user_id: '40', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Илья', surname: 'Попов', user_id: '41', group_id: '3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Михаил', surname: 'Виноградов', user_id: '42', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ефрем', surname: 'Петров', user_id: '43', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Кира', surname: 'Попова', user_id: '44', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Нона', surname: 'Лебедева', user_id: '45', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Гога', surname: 'Кузнецов', user_id: '46', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Митя', surname: 'Королев', user_id: '47', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Петр', surname: 'Захаров', user_id: '48', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ева', surname: 'Антонова', user_id: '49', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Анна', surname: 'Белова', user_id: '50', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Соня', surname: 'Смолова', user_id: '51', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Родион', surname: 'Гуев', user_id: '52', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Зоя', surname: 'Иванова', user_id: '53', group_id: '4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Матвей', surname: 'Лебедев', user_id: '54', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Леонид', surname: 'Сколов', user_id: '55', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Яков', surname: 'Орлов', user_id: '56', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Терентий', surname: 'Баранов', user_id: '57', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Коля', surname: 'Борисов', user_id: '58', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Борис', surname: 'Николаев', user_id: '59', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Любовь', surname: 'Волкова', user_id: '60', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Вадим', surname: 'Новиков', user_id: '61', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Геннадий', surname: 'Макаров', user_id: '62', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Галина', surname: 'Солоева', user_id: '63', group_id: '5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Захар', surname: 'Романов', user_id: '64', group_id: '5', createdAt: new Date(), updatedAt: new Date() },   
      { name: 'Лев', surname: 'Виноградов', user_id: '65', group_id: '5', createdAt: new Date(), updatedAt: new Date() }
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
