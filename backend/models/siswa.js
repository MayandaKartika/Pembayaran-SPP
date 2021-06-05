'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    static associate(models) {
      this.belongsTo(models.kelas, {
        foreignKey: "id_kelas",
        as : "kelas"
      })
      this.belongsTo(models.spp, {
        foreignKey: "id_spp",
        as : "spp"
      })

    }
  };
  siswa.init({
    id_siswa:{
      type: DataTypes.INTEGER,
      primaryKey: true,      
      autoIncrement: true
    },
    nisn: DataTypes.INTEGER,
    nis: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    id_kelas: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    no_telp: DataTypes.INTEGER,
    id_spp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'siswa',
    tableName: 'siswa'
  });
  return siswa;
};