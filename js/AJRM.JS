const textos = ["hola", "", "mundo", "examen"];
const hayCadenaVacia = textos.some(texto => texto === "");

console.log(hayCadenaVacia); // true si hay al menos una cadena vacía