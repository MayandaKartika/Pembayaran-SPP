'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    static associate(models) {
    }
  };
  kelas.init({
    id_kelas:{
      type: DataTypes.INTEGER,
      primaryKey: true,      
      autoIncrement: true
    },
    nama_kelas: DataTypes.STRING,
    kompetensi_keahlian: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas',
    tableName: 'kelas'
  });
  return kelas;
};