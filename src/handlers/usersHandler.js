const getUsersHandler = (req, res) => {
    res.status(200).send('trae todos los usuarios');
};

const getUserHandlerById = (req, res) => {
    const {id} = req.params
    res.status(200).send(`detalle del usuario ${id}`)
};

const postUserHandler = (req, res) => {
    const { user_name, image, email, password} = req.body;
    res.status(201).send(`creando un usuario con user_name: ${user_name}, image: ${image}, email: ${email}, password: ${password}` );
};

const loginUserHandler = (req, res) => {
    res.status(201).send('login');
};

const updateUserHandler = (req, res) => {
    res.status(200).send('actualizando datos de un usuario');
};

module.exports = {
    getUsersHandler,
    getUserHandlerById,
    postUserHandler,
    loginUserHandler,
    updateUserHandler
}