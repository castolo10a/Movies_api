const { User } = require("../../db");
const bcrypt = require("bcrypt");
const { generateToken } = require('./generateToken');
const cookie = require('cookie');

const loginUser = async (user, res) => {
      const db_user = await User.findOne({
        where: {
          email: user.email,
        },
      });
  
      if (db_user) {
  
        const passwordMatch = await bcrypt.compare(
          user.password,
          db_user.password
        );
  
        if (passwordMatch) {
          const token = generateToken(db_user);
  
          // Crear una cookie con el token y la sesión de usuario
          res.setHeader('Set-Cookie', [
            cookie.serialize('user_token', token, {
              httpOnly: true,
              maxAge: 3600,
              path: '/',
            }),
            cookie.serialize('user_session', JSON.stringify(db_user), {
              httpOnly: true,
              maxAge: 3600,
              path: '/',
            }),
          ]);
  
          return {
            msg: 'Login success',
            session: {
              ...db_user,
            },
            token: token,
          };
        } else {
          throw new Error('Invalid password');
        }
      } else {
        throw new Error('User not found');
      }
};
  

module.exports = {
    loginUser
}
