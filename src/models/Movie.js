const { DataTypes } = require('sequelize');
// Exportamos una funacion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Movie", {
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
    date_added: {
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
    studios: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    producers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    isFav: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },{
    timestamps: false,
  });
};