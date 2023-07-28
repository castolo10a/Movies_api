const {User} = require('../../db');
const bcrypt = require('bcrypt')

const createUser = async (user_name, image, email, password) => {
    // Generar un salt para el hash
    const salt = await bcrypt.genSalt(10);

    // Encriptar la contraseña con el salt generado
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
    user_name,
    image,
    email,
    password: hashedPassword
    });

    return newUser
}

module.exports = {
    createUser
}