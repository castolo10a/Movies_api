const { DataTypes } = require('sequelize');
// Exportamos una funacion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Character", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    real_name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
    deck:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    birth: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  },{
    timestamps: false,
  });
};