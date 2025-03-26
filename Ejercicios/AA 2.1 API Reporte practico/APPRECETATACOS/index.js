const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Cargar datos desde el archivo JSON
let recetasTacos = [];

try {
    const recetaJSON = fs.readFileSync("recetaTacos.json", "utf8");
    recetasTacos = JSON.parse(recetaJSON);
} catch (error) {
    console.error("Error al leer el archivo JSON:", error);
}

// Endpoint para obtener todos los tacos
app.get("/tacos", (req, res) => {
    res.json(recetasTacos);
});

// Endpoint para obtener un taco por tipo
app.get("/receta/:type", (req, res) => {
    const tipo = req.params.type.toLowerCase();
    const taco = recetasTacos.find(t => t.tipo.toLowerCase() === tipo);

    if (taco) {
        console.log("Datos enviados al frontend:", taco);
        res.json(taco);
    } else {
        res.status(404).json({ mensaje: "Taco no encontrado" });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
