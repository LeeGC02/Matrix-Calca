export const postUsuario = async (usuarioNuevo = "") => {
  try {
    const response = await fetch("http://localhost/matrix_bd/usuarios.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarioNuevo),
    });

    if (response.ok) {
      const usuarioCreado = await response.json();
      console.log("Usuario nuevo creado:", usuarioCreado);
    } else {
      console.error("Error al crear usuario nuevo:", response.status);
    }
  } catch (error) {
    console.error("Error al crear usuario nuevo:", error);
  }
};


export const loginOk = async (credentials) => {
    try {
      const response = await fetch("http://localhost/matrix_bd/usuarios.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Autenticación exitosa
        const data = await response.json();
        console.log(data);
        if (data.response == 'true'){
          return true;
        } else {
          return false;
        }
//        console.log('Token de autenticación:', 'kj2');
        // Puedes almacenar el token en el estado o en una cookie, según tus necesidades
      } else {
        // Autenticación fallida
        const errorData = await response.json();
        console.error('Error de autenticación:', errorData.message);
        return false;
      }
    } catch (error) {
      console.error('Error de red:', error.message);
      return false;

    }
  };
