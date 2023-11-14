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


export const loginOk = async () => {
    const credentials = {
      username: username,
      password: password,
    };

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
        console.log('Token de autenticación:', data.token);
        // Puedes almacenar el token en el estado o en una cookie, según tus necesidades
      } else {
        // Autenticación fallida
        const errorData = await response.json();
        console.error('Error de autenticación:', errorData.message);
      }
    } catch (error) {
      console.error('Error de red:', error.message);
    }
  };
