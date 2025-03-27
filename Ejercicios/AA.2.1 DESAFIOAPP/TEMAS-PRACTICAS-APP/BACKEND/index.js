const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('FRONTEND')); // para servir el HTML y JS frontend

const temas = [
    {
        id: 1,
        nombre: "JavaScript Básico",
        descripcion: "Fundamentos del lenguaje JavaScript.",
        palabras_claves: ["variables", "funciones", "eventos"],
        practicas: [
            {
                titulo: "Declaración de variables",
                descripcion: "Ejercicio sobre cómo declarar variables.",
                objetivo: "Comprender let, const y var."
            },
            {
                titulo: "Manejo de eventos",
                descripcion: "Capturar eventos del DOM.",
                objetivo: "Aprender a manejar eventos en JavaScript."
            }
        ]
    },
    {
        id: 2,
        nombre: "API Fetch",
        descripcion: "Cómo hacer peticiones HTTP con Fetch API.",
        palabras_claves: ["fetch", "API", "JSON"],
        practicas: [
            {
                titulo: "Obtener datos de una API",
                descripcion: "Ejercicio sobre cómo hacer una petición GET.",
                objetivo: "Entender el uso de Fetch API."
            }
        ]
    }
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FRONTEND', 'index.html'));
});

app.get('/temas', (req, res) => {
    res.json(temas);
});

app.get('/tema/:type', (req, res) => {
    const tema = temas.find(t => t.nombre.toLowerCase() === req.params.type.toLowerCase());
    if (tema) {
        res.json(tema);
    } else {
        res.status(404).json({ message: "Tema no encontrado" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
