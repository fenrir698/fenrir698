// scripts.js

// Fecha de inicio de la relación
const startDate = new Date('2024-06-29');

// Función para calcular los días juntos
function calculateDaysTogether() {
    const today = new Date();
    const timeDiff = today - startDate;
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('daysTogether').textContent = daysTogether;
}

// Llama a la función cuando la página cargue
window.onload = calculateDaysTogether;
