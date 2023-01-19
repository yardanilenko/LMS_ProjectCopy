'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {

        await queryInterface.bulkInsert('Rooms', [
                {
                    name: 'Еноты',
                    group_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Волки',
                    group_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Лисы',
                    group_id: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Бобры',
                    group_id: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Медведи',
                    group_id: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
        ;
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('Rooms', null, {});
    }
};
