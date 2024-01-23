const operaciones = require('./operaciones');

const [, , operacion, ...restoArgumentos] = process.argv;

const argumentosCadena = restoArgumentos.join(' ');

if (operacion === 'registrar') {
  const [nombre, edad, animal, color, enfermedad] = argumentosCadena.split(' ');
  operaciones.registrarCita({ nombre, edad, animal, color, enfermedad });
} else if (operacion === 'leer') {
  operaciones.leerCitas();
} else {
  console.log('Operación no válida. Las operaciones válidas son "registrar" y "leer".');
}
