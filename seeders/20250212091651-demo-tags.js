'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Tags', [{ 
        name: 'yogapractice', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 
      
      await queryInterface.bulkInsert('Tags', [{ 
        name: 'yogainspiration', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 
      
      await queryInterface.bulkInsert('Tags', [{ 
        name: 'wellness', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 

      await queryInterface.bulkInsert('Tags', [{ 
        name: 'nature', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 

      await queryInterface.bulkInsert('Tags', [{ 
        name: 'spiritual', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 

      await queryInterface.bulkInsert('Tags', [{ 
        name: 'sport', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 

      await queryInterface.bulkInsert('Tags', [{ 
        name: 'yogateacher', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }]); 
      
    } catch (error) {
      console.error('Seeder error in Tags:', error);
    }
  },

  async down (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete('Tags', null, {});
    } catch (error) {
      console.error('Error while deleting Tags:', error);
    }
  }
};
