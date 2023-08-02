const {User} = require('../../db');

const getUserById = async (id) => {
      const user = await User.findByPk(id, {
        attributes: [
          "id",
          "user_name",
          "image",
          "email",
          "password",
        ],
      });
      return user;
};

  module.exports = {
    getUserById
  }