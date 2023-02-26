'use strict';

const description = `We get it: just having a shoe isn't unique enough. You need a customized version of it; one that can display your own personality of being different. Well, we have it.`;
const [ createdAt, updatedAt ] = [ new Date(), new Date() ];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [{
      id: 1,
      title: 'Very Unique',
      slug: 'very-unique',
      price: 759.99,
      productId: 1,
      inventory: 1,
      description, createdAt, updatedAt
    },
    {
      id: 2,
      title: 'Ultra Unique',
      slug: 'ultra-unique',
      price: 769.99,
      productId: 1,
      inventory: 0,
      description, createdAt, updatedAt
    },
    {
      id: 3,
      title: 'Very Unique',
      slug: 'very-unique',
      price: 759.99,
      productId: 2,
      inventory: 146242,
      description, createdAt, updatedAt
    },
    {
      id: 4,
      title: 'Ultra Unique',
      slug: 'ultra-unique',
      price: 769.99,
      productId: 2,
      inventory: 4,
      description, createdAt, updatedAt
    },
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {});
  }
};
