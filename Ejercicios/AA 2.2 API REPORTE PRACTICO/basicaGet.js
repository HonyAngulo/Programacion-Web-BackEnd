import axios from "axios";

const obtenerUsuario = async () => {
    try {
        const response = await axios.get('https://reqres.in/api/users/4', {
            headers: {
                'Authorization': 'Basic ' + Buffer.from('usuario_incorrecto:contrasena_equivocada').toString('base64')
            }
        });
        console.log('Registro exitoso:', response.data);
    } catch (error) {
        console.error('Error al obtener datos del usuario:', {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });
    }
};

obtenerUsuario();