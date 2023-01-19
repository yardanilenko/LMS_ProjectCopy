'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {

        await queryInterface.bulkInsert('Events', [
            {
                name: 'Лекция',
                user_id: 1,
                description: 'ReactJS',
                start: '2023-01-23T00:06:30.000Z',
                finish: '2023-01-23T00:08:00.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Лекция',
                user_id: 1,
                description: 'ReactJS (продолжение)',
                start: '2023-01-24T00:06:30.000Z',
                finish: '2023-01-24T00:07:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Лекция',
                user_id: 1,
                description: 'React Router',
                start: '2023-01-25T00:06:30.000Z',
                finish: '2023-01-25T00:08:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Лекция',
                user_id: 1,
                description: 'Redux',
                start: '2023-01-26T00:06:30.000Z',
                finish: '2023-01-26T00:08:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Лекция',
                user_id: 1,
                description: 'Redux (продолжение)',
                start: '2023-01-27T00:06:30.000Z',
                finish: '2023-01-27T00:08:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Лекция',
                user_id: 1,
                description: 'Redux Thunk',
                start: '2023-02-01T00:06:30.000Z',
                finish: '2023-02-01T00:08:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Лекция',
                user_id: 1,
                description: 'Redux Saga',
                start: '2023-02-02T00:06:30.000Z',
                finish: '2023-02-02T00:08:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Лекция',
                user_id: 1,
                description: 'Redux Thunk && Saga (продолжение)',
                start: '2023-02-03T00:06:30.000Z',
                finish: '2023-02-03T00:08:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-01-23T00:09:30.000Z',
                finish: '2023-01-23T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-01-24T00:09:30.000Z',
                finish: '2023-01-24T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-01-25T00:09:30.000Z',
                finish: '2023-01-25T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-01-26T00:09:30.000Z',
                finish: '2023-01-26T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-01-27T00:09:30.000Z',
                finish: '2023-01-27T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-01-30T00:09:30.000Z',
                finish: '2023-01-30T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-01-31T00:09:30.000Z',
                finish: '2023-01-31T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-02-01T00:09:30.000Z',
                finish: '2023-02-01T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-02-02T00:09:30.000Z',
                finish: '2023-02-02T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Йога',
                user_id: 2,
                description: 'Йога для спины',
                start: '2023-02-03T00:09:30.000Z',
                finish: '2023-02-03T00:10:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Показ проектов',
                user_id: 1,
                description: 'Своя игра',
                start: '2023-01-31T00:14:00.000Z',
                finish: '2023-01-31T00:15:00.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Показ финальных проектов',
                user_id: 1,
                description: 'группа Еноты',
                start: '2023-02-10T00:14:00.000Z',
                finish: '2023-02-10T00:15:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Код-ревью',
                user_id: 1,
                description: 'ReactJS',
                start: '2023-01-26T00:14:00.000Z',
                finish: '2023-01-26T00:15:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Код-ревью',
                user_id: 1,
                description: 'Redux',
                start: '2023-02-01T00:14:00.000Z',
                finish: '2023-02-01T00:15:30.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    async down(queryInterface) {

        await queryInterface.bulkDelete('Events', null, {});
    }
};
