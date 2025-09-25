let estados = ["activo", "pendiente", "completado"];

// Reemplazar los dos últimos elementos con "cerrado" y "archivado"
estados.splice(1, 2, "cerrado", "archivado");

// Mostrar solo los nuevos elementos
console.log(estados.slice(1)); // ["cerrado", "archivado"]



