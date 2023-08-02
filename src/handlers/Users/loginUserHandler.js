const {loginUser} = require('../../controllers/Users/loginUser');

const loginUserHandler = async (req, res) => {
    const user = req.body;
    try {
        const login = await loginUser(user, res);
        res.status(200).json(login)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    loginUserHandler
}