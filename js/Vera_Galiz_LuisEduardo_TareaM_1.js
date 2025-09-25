const calificaciones = [8, 9, 10];

// Usa reduce() para sumar todos los elementos del arreglo.
// El 0 es el valor inicial del acumulador.
const suma = calificaciones.reduce((acumulador, calificacionActual) => acumulador + calificacionActual, 0);

// Divide la suma total por el número de elementos para obtener el promedio.
const promedio = suma / calificaciones.length;

console.log(`El promedio de las calificaciones es: ${promedio}`);


// excelente chico rebelde!!