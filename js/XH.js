let estados = ["activo", "pendiente", "completado"];

// Reemplazar y guardar los nuevos elementos
estados.splice(1, 2, "cerrado", "archivado");
let nuevos = estados.slice(1);

console.log(nuevos); // ["cerrado", "archivado"]

/*
Mi nombre es Ximena

suponiendo que ya te califico

*/
