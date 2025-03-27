document.addEventListener("DOMContentLoaded", () => {
    const btnMostrarTemas = document.getElementById("mostrarTemas");
    const contenedorTemas = document.getElementById("temas");
    const detalle = document.getElementById("detalle");

    const temas = [
        { 
            nombre: 'Desarrollo de Software 💻', 
            descripcion: 'Proceso de creación, diseño y mantenimiento de software.',
            palabras_claves: ['Programación', 'Metodologías Ágiles', 'Testing'],
            practicas: [
                {titulo: 'Ciclo de Vida del Software', descripcion: 'Análisis, diseño, implementación y mantenimiento del software.', objetivo: 'Entender cómo se lleva a cabo el desarrollo completo de una aplicación.'},
                {titulo: 'Pruebas de Software', descripcion: 'Proceso de verificar que el software funciona como se espera.', objetivo: 'Aprender sobre diferentes tipos de pruebas en el ciclo de desarrollo.'}
            ]
        },
        { 
            nombre: 'Redes de Computadoras 🌐', 
            descripcion: 'Conjunto de sistemas interconectados para compartir recursos y datos.',
            palabras_claves: ['Protocolos', 'Seguridad', 'Conectividad'],
            practicas: [
                {titulo: 'Modelo OSI', descripcion: 'Estudio de las 7 capas que definen cómo se comunican las redes.', objetivo: 'Comprender cómo funciona la comunicación entre dispositivos a través de redes.'},
                {titulo: 'Seguridad en Redes', descripcion: 'Técnicas y prácticas para proteger la infraestructura de red.', objetivo: 'Identificar vulnerabilidades y cómo proteger redes contra ataques.'}
            ]
        },
        { 
            nombre: 'Bases de Datos 🗄️', 
            descripcion: 'Sistema que organiza, almacena y manipula datos de manera estructurada.',
            palabras_claves: ['SQL', 'Normalización', 'Modelos Relacionales'],
            practicas: [
                {titulo: 'Consultas SQL', descripcion: 'Uso del lenguaje SQL para consultar y manipular datos en bases de datos.', objetivo: 'Desarrollar habilidades para interactuar con bases de datos a través de SQL.'},
                {titulo: 'Diseño de Bases de Datos', descripcion: 'Proceso de creación de estructuras eficientes para almacenar datos.', objetivo: 'Entender la importancia del diseño adecuado para optimizar el rendimiento.'}
            ]
        },
        { 
            nombre: 'Programación Lógica y Funcional 🧠', 
            descripcion: 'Paradigma de programación basado en lógica matemática y funciones puras.',
            palabras_claves: ['Python', 'Funciones Puras', 'Inmutabilidad'],
            practicas: [
                {titulo: 'Fundamentos de Python Funcional', descripcion: 'Uso de funciones puras y estructuras inmutables en la programación.', objetivo: 'Aprender a programar sin efectos secundarios utilizando Python.'},
                {titulo: 'Programación Declarativa', descripcion: 'Estilo de programación basado en lógica y reglas en lugar de instrucciones secuenciales.', objetivo: 'Comprender cómo expresar soluciones declarativamente.'},
                {titulo: 'Fundamentos de Haskell', descripcion: 'Estudio del lenguaje funcional Haskell y sus principios básicos.', objetivo: 'Aprender a utilizar funciones puras y estructuras inmutables en la programación.'}
            ]
        }
    ];

    btnMostrarTemas.addEventListener("click", () => {
        contenedorTemas.innerHTML = ""; // Limpiar antes de agregar
        contenedorTemas.style.display = "flex";

        temas.forEach(tema => {
            const btnTema = document.createElement("button");
            btnTema.textContent = tema.nombre;
            btnTema.classList.add("tema-boton");
            btnTema.onclick = () => cargarDetalle(tema);
            contenedorTemas.appendChild(btnTema);
        });
    });

    function cargarDetalle(tema) {
        detalle.innerHTML = `
            <h2>${tema.nombre} 📚</h2>
            <p><strong>Descripción:</strong> ${tema.descripcion}</p>
            <p><strong>Palabras clave:</strong> ${tema.palabras_claves.join(', ')}</p>
            <h3>Prácticas 📝:</h3>
            <ul>
                ${tema.practicas.map(p => `
                    <li>
                        <strong>${p.titulo}</strong><br>
                        ${p.descripcion}<br>
                        <em>Objetivo:</em> ${p.objetivo}
                    </li>
                `).join('')}
            </ul>
        `;
    }
});
