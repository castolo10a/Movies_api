const regexUser_name= /^[a-zA-Z0-9]+$/;
const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;


const validationPostUser = (data) => {
    const {
      user_name,
      image,
      email,
      password
    } = data;
  
    if (
      !user_name ||
      !email 
    ) {
      throw new Error("Campos obligatorios");
    }
  
    //--------------user_name----------------
  
    if (user_name.length < 3) {
      throw new Error("Nombre de usuario debe contener al menos 3 caracteres");
    }
  
    if (user_name.length > 15) {
      throw new Error("Nombre de usuario puede contener como maximo 15 caracteres");
    }
  
    if (
        !regexUser_name.test(
            user_name
      )
    ) {
      throw new Error("Nombre de usuario debe contener solo letras y números");
    }
  
    //-------------------email------------------
    
    if (!regexEmail.test(email)) {
      throw new Error(
        "El Email ingresado no es valido, debe tener el siguiente formato: 'usuario@dominio.com"
      );
    }
  
    //-------------------password------------------
  
   if (!regexPassword.test(password)) {
     throw new Error("La contraseña debe contener una letra mayuscula, una minuscula, un número y un caracter especial");
   }
  
    //-------------------imagen------------------
  
    if (image && image.length > 201) {
      throw new Error("Imagen puede contener como maximo 200 caracteres");
    }
  };
  
  module.exports = { validationPostUser };