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