const {updateUser} = require("../../controllers/Users/updateUser");

const updateUserHandler = async (req, res) => {
    const { id } = req.body; // Obtén el ID del usuario a actualizar
    const updateData = req.body; // Obtén los datos de actualización del cuerpo de la solicitud
    try {
        await updateUser(id, updateData);
        res.status(200).json('Usuario actualizado exitosamente')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    updateUserHandler
}