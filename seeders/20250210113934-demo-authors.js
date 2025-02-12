'use strict';

module.exports = { 
  up: async (queryInterface, Sequelize) => { 
    try {
      await queryInterface.bulkInsert('Authors', [{ 
        name: 'Ashley Galvin', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 
      
      await queryInterface.bulkInsert('Authors', [{ 
        name: 'Patrick Beach', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 
      
      await queryInterface.bulkInsert('Authors', [{ 
        name: 'MacKenzie Miller', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 
      
    } catch (error) {
      console.error('Seeder error in Authors:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('Authors', null, {});
    } catch (error) {
      console.error('Error while deleting Authors:', error);
    }
  }
};
