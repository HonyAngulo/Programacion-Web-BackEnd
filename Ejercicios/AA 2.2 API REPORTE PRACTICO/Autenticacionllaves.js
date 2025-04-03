import axios from 'axios';

// Configuración segura (usa variables de entorno en producción)
const config = {
  API_KEY: 'c04e4de0fac6070886b9caeff804b8f4', // Ej: 'd1a2b3c4e5f6g7h8i9j0'
  CITY: 'Madrid',
  UNITS: 'metric'
};

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${config.CITY}&appid=${config.API_KEY}&units=${config.UNITS}`;

// Versión mejorada con manejo de errores
axios.get(URL)
  .then(response => {
    const weather = response.data;
    console.log('\n\x1b[36m══════════════════════════════════\x1b[0m');
    console.log('\x1b[1m🌤️  Clima en', weather.name + ':');
    console.log('\x1b[32m• Temperatura:', weather.main.temp + '°C');
    console.log('• Sensación térmica:', weather.main.feels_like + '°C');
    console.log('• Humedad:', weather.main.humidity + '%');
    console.log('• Condición:', weather.weather[0].description);
    console.log('\x1b[36m══════════════════════════════════\x1b[0m\n');
  })
  .catch(error => {
    console.error('\x1b[31m⚠️ Error en la solicitud:\x1b[0m');
    if(error.response) {
      console.log('• Código:', error.response.status);
      console.log('• Mensaje:', error.response.data.message);
      console.log('\x1b[33mSolución: Verifica tu API Key en https://home.openweathermap.org/api_keys\x1b[0m');
    } else {
      console.log('• Error:', error.message);
    }
  });