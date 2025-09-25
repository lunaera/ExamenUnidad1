//19. Dado un arreglo de tareas, usa splice() para insertar "nuevo tarea" en la segunda posicion

// Arreglo inicial de tareas
let tareas = ["Estudiar JavaScript", "Hacer ejercicio", "Comprar víveres", "Llamar al médico"];

console.log("Arreglo original:");
console.log(tareas);

// Usando splice() para insertar en la segunda posición (índice 1)
// splice(posición, elementos_a_eliminar, elemento_a_insertar)
tareas.splice(1, 0, "nueva tarea");

console.log("\nArreglo después de insertar 'nueva tarea' en la segunda posición:");
console.log(tareas);