const {getUsersByName, getAllUsers} = require("../../controllers/Users/getUsers")

const getUsersHandler =  async (req, res) => {
    const {user_name} = req.query;
    try {
        const results = user_name ? await getUsersByName(user_name) : await getAllUsers()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    getUsersHandler
}