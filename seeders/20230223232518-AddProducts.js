'use strict';

const description = `Wow look at this product huh? Isn't it pretty? Well, you'd be exactly correct: it IS pretty. In fact, I think you should buy it right now... while supplies last....`;
const [ createdAt, updatedAt ] = [ new Date(), new Date() ];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return await queryInterface.bulkInsert('Products', [{
        id: 1,
        title: 'The 1st Shoe Ever Made (Rare Item!!)',
        slug: 'first-shoe',
        price: 329.99,
        is_published: true,
        description, createdAt, updatedAt
      },{
        id: 2,
        title: 'The 234072347585th Shoe Ever Made (Common Item!!)',
        slug: 'just-a-shoe',
        price: 319.99,
        is_published: true,
        description, createdAt, updatedAt
      }])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {});
  }
};
