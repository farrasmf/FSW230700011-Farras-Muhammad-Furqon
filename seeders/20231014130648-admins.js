'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date();
     await queryInterface.bulkInsert('admins', [{
       user_name: 'farrasmuhammadfurqon@gmail.com',
       password: 'Farras051098',
       full_name: 'Farras Muhammad Furqon',
       role: 'Super Admin',
       createdAt: date,
       updatedAt: date
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
