'use strict';

const article = require('../models/article');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 1,
        tagId: 1,
        createdAt: new Date(),
        updatedAt : new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 1,
        tagId: 2,
        createdAt: new Date(),
        updatedAt : new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 2,
        tagId: 1,
        createdAt: new Date(),
        updatedAt : new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 2,
        tagId: 3,
        createdAt: new Date(),
        updatedAt : new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 3,
        tagId: 4,
        createdAt: new Date(),
        updatedAt : new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 3,
        tagId: 5,
        createdAt: new Date(),
        updatedAt : new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 3,
        tagId: 6,
        createdAt: new Date(),
        updatedAt : new Date()
      }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
