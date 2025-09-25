//José Luis Gaspar Santiago

console.log("--- Ejecutando script externo solucion.js ---");
// 1. Arreglo original con valores diversos
const valores = [null, "", "texto", undefined, 0, "otro texto", false];
console.log("Arreglo original:", valores);

// 2. Usar filter() para eliminar los valores falsy
const resultado = valores.filter(Boolean);

// 3. Mostrar el resultado en la consola del navegador
console.log("Arreglo filtrado:", resultado);



// Muy buen wicho amigo del chico rebelde!!