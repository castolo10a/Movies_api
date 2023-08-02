const { User } = require("../../db");
const bcrypt = require('bcrypt')

const updateUser = async (id, updateData) => {
      // Verifica si hay datos para actualizar
      if (!updateData || Object.keys(updateData).length === 0) {
        throw new Error("No se proporcionaron datos de actualización");
      }

      

      if(updateData.password){
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(updateData.password, salt);
        updateData.password = hashedPassword;

      }
      
      // Actualiza los campos específicos del usuario en la base de datos
      const [filasActualizadas, [usuarioActualizado]] = await User.update(updateData, {
        where: { id },
        returning: true // Devuelve el registro actualizado
      });
  
      // Verifica si el usuario se actualizó correctamente
      if (filasActualizadas === 0) {
        throw new Error("No se encontró el usuario especificado");
      }
      
      // Retorna el usuario actualizado
      return usuarioActualizado;
};
  
module.exports = { 
    updateUser
};
  
  
  