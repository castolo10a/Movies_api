const {createUser} = require('../../controllers/Users/createUser');
const { validationPostUser } = require('../../validations/validationPostUser');

const postUserHandler = async (req, res) => {
    const { user_name, image, email, password} = req.body;
    try {
        validationPostUser(req.body);
        const newUser = await createUser(user_name, image, email, password);
        res.status(201).send(`Registro exitoso de ${newUser}`)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    postUserHandler
}