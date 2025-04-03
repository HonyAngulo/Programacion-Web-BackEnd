import axios from "axios";

const registrarUsuario = async () => {
    try {
        const respuesta = await axios.post('https://reqres.in/api/register', { // 'reqres.in', no 'regres.in'
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        });
        console.log('Registro exitoso:', respuesta.data);
    } catch (error) {
        console.error('Error en el registro:', error.response?.data || error.message);
    }
};

registrarUsuario();
