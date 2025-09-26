const edades = [20, 17, 22, 15];

const todosMayores = edades.every(edad => edad > 18);

if (todosMayores) {
    console.log("Todos son mayores de 18");
} else {
    const menores = edades.filter(edad => edad <= 18);
    console.log("No todos son mayores de 18");
    console.log("Edades que no cumplen:", menores);
}

//David Medel Vera




// calificado deivis!!


/*
    instrucciones:
    1. si ya actualizaste tu main, significa que estas biendo estas instrucciones
    2. ahora actualiza tu main2
    3. sube los cambios a tu rama
    4. listo, debes enviarme 3 fotos a mi whasapp personal: 
        a) evidencia del main sobre lo que te puse en la calificación (osea esto 👈)
        b) evidencia del main2 (el otro archivo que actualizaste)
        c) evidencia de tu repositorio donde igualmente se vea lo que te califiqué
*/