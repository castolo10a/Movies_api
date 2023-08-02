const {User} = require("../../db");
const {Op} = require("sequelize");

const getAllUsers = async () => {
      const dataUser = await User.findAll({
        attributes: [
            "id",
            "user_name",
            "image",
            "email",
            "password",
        ],
      });
      return dataUser
};

const getUsersByName = async(user_name) => {
    const users = await User.findAll({
        attributes: [
            "id",
            "user_name",
            "image",
            "email",
            "password",
          ],
          where: {
            [Op.or]: [
              { user_name: user_name },
            ],
          },
        });
        return users;
};

module.exports = {
    getAllUsers,
    getUsersByName
}