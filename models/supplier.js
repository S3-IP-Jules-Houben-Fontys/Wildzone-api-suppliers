'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Supplier.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING
    },
    place:{
      allowNull: false,
      type: DataTypes.STRING
    },
    postalCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    houseNumber :{
      allowNull: false,
      type: DataTypes.STRING
    },
    KVKnumber: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};