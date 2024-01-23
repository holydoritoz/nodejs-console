const fs = require('fs');
const path = require('path');

const citasPath = path.join(__dirname, 'citas.json');

function registrarCita(nuevaCita) {
let citas = leerCitas();

  // Agrega la nueva cita al array de citas
  citas.push(nuevaCita);

  fs.writeFileSync(citasPath, JSON.stringify(citas, null, 2));
}

function leerCitas() {
  try {
    const citasData = fs.readFileSync(citasPath, 'utf-8');
    return JSON.parse(citasData);
  } catch (error) {
    // Si hay un error al leer el archivo, devuelve un array vacío
    return [];
  }
}

module.exports = {
  registrarCita,
  leerCitas,
};
