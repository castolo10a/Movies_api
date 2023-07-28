const getUsersHandler = (req, res) => {
    res.status(200).send('trae todos los usuarios');
};

module.exports = {
    getUsersHandler
}