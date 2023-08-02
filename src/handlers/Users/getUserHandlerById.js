const {getUserById} = require("../../controllers/Users/getUserById")

const getUserHandlerById = async (req, res) => {
    const {id} = req.params
    try {
        const idUser = await getUserById(id);
        res.status(200).json(idUser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    getUserHandlerById
}