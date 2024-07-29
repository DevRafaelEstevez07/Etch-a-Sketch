
const container = document.querySelector('#container');
let colorMode = 'black'; // Estado inicial del modo de color

// Crear celdas en el contenedor
for (let i = 0; i < 255; i++) {
    const div = document.createElement('div');
    div.className = 'cell';
    container.appendChild(div);
}

// Función para obtener un color hexadecimal aleatorio
function getRandomColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}

// Cambiar el color de la celda al pasar el cursor por encima
container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('cell')) {
        const cell = event.target;
        if (colorMode === 'black') {
            cell.style.backgroundColor = 'black';
        } else if (colorMode === 'random') {
            cell.style.backgroundColor = getRandomColor();
        }
    }
});

// Configurar el botón de negro
document.getElementById('btnBlack').addEventListener('click', () => {
    colorMode = 'black'; // Cambia el modo de color a negro
});

// Configurar el botón de color aleatorio
document.getElementById('btnRandom').addEventListener('click', () => {
    colorMode = 'random'; // Cambia el modo de color a aleatorio
});

// Configurar el botón de limpiar
document.getElementById('btnClear').addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = ''; // Restablece el color inicial
    });
});