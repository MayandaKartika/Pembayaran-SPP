'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    static associate(models) {
      this.belongsTo(models.petugas, {
        foreignKey: "id_petugas",
        as : "petugas"
      })
      this.belongsTo(models.spp, {
        foreignKey: "id_spp",
        as : "spp"
      })

    }
  };
  pembayaran.init({
    id_pembayaran:{
      type: DataTypes.INTEGER,
      primaryKey: true,      
      autoIncrement: true
    },
    id_petugas: DataTypes.INTEGER,
    nisn: DataTypes.INTEGER,
    tgl_bayar: DataTypes.DATE,
    bulan_dibayar: DataTypes.STRING,
    tahun_dibayar: DataTypes.STRING,
    id_spp: DataTypes.INTEGER,
    jumlah_bayar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pembayaran',
    tableName: 'pembayaran'
  });
  return pembayaran;
};