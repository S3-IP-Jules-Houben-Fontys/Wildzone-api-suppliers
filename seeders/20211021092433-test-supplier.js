'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Suppliers', [{
      name: 'Nike',
      email: 'info@nike.com',
      phoneNumber: '12345678',
      country: 'United States',
      place: 'Texas',
      postalCode: '1234AB',
      houseNumber: '1',
      KVKnumber: 123,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Suppliers', null, {});
  }
};
