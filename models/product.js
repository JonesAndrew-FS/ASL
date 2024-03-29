'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Product.hasMany(models.Variant);
    }
  }
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    is_published: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};