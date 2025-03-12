read -p "Nombre del proyecto: " nombre

# Crear carpeta del archivo
mkdir $nombre
cd $nombre

# Inicializar npm 
npm init -y

# Instalar dependencias
npm install express body-parser

# Agregar type: modele al package.json
sed -i '5i\ "type":"module",' package.json

# Crear estructura de archivos
mkdir public
New-Item index.js
echo "import express from 'express';" >> index.js
echo "import path from 'path';" >> index.js
echo "const app = express();" >> index.js
echo "const PORT = 3000;" >> index.js
echo "app.use(bodyParser.urlencoded({ extended: true }));" >> index.js
echo "app.use(express.static(path.join(__dirname, 'public')));" >> index.js
echo "app.listen(PORT, () => console.log(\`Servidor escuchando en http://localhost:${PORT}\`));" >> index.js
echo "Proyecto '$nombre' creado con éxito."

# chmod +x crear-proyecto.sh para dar permisos de ejecución
# ./crear-proyecto.sh para ejecutar el script
# sudo mv crear-proyecto.sh /usr/local/bin/crear-proyecto para mover el script a la carpeta de comandos
# crear-proyecto para ejecutar el script desde cualquier lugar