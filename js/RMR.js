// arreglo de objetos con producto y precio
let productos = [
    { producto: "Manzana", precio: 25 },
    { producto: "Banana", precio: 10 },
    { producto: "Naranja", precio: 15 },
    { producto: "Pera", precio: 20 }
];

// ordenar por precio descendente
productos.sort((a, b) => b.precio - a.precio);

console.log("Productos ordenados por precio (descendente):");
console.table(productos);


//RADAI MANZANO RAMOS 23920233