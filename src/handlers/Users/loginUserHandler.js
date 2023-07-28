const loginUserHandler = (req, res) => {
    res.status(201).send('login');
};

module.exports = {
    loginUserHandler
}