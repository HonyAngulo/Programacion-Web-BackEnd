import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const app = express(); // Definir antes de usar
const port = 4000;

var nombreEquipo = "";

// Middleware para procesar datos de formularios y JSON

app.use(bodyParser.urlencoded({ extended: true }));


// Middleware personalizado
function registrador(req, res, next) { // Crear tu propio middleware
    console.log(req.body); // Muestra los datos enviados por el usuario
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"]; // Concatena los datos enviados por el usuario
    next(); // Llama a la siguiente función en la pila de middleware
}

// Usar el middleware
app.use(registrador);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(`Nombre del equipo: ${nombreEquipo}`);
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});