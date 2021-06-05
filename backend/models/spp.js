'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spp extends Model {
    static associate(models) {
    }
  };
  spp.init({
    id_spp:{
      type: DataTypes.INTEGER,
      primaryKey: true,      
      autoIncrement: true
    },
    tahun: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'spp',
    tableName: 'spp'
  });
  return spp;
};
