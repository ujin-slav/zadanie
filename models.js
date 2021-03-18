const sequelize = require(`./db`)
const {DataTypes} = require('sequelize')

const Device = sequelize.define("Device", {
    id: {type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true,},
    one: {type: DataTypes.STRING,unique:false},
    two: {type:  DataTypes.STRING,allowNull: false},
  });

  module.exports = {Device}