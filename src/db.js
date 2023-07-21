require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, API_KEY } = process.env;
const movieModel = require('./models/Movie');
const userModel = require('./models/User');

// DB_DEPLOY

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

movieModel(sequelize);
userModel(sequelize);

// Para relacionarlos hacemos un destructuring
const { User, Movie, Character } = sequelize.models;

// Aca vendrian las relaciones

User.belongsToMany(Movie, {
  through: 'UserMovie',
  timestamps: false
});
Movie.belongsToMany(User, {
  through: 'UserMovie',
  timestamps: false
});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize,           // para importart la conexión = require('./db.js');
  API_KEY
};

