// Emmanuel Velasquez Ortiz, 30. Dado un arreglo de productos {nombre,precio}, usa some () para verificar si hay alguno con precio igual a 0
const productos = [
    { nombre: 'Laptop', precio: 15000 },
    { nombre: 'Mouse', precio: 350 },
    { nombre: 'Teclado de regalo', precio: 0 },
    { nombre: 'Monitor', precio: 4000 }
];


const hayAlgunoGratis = productos.some(producto => producto.precio === 0);


console.log(hayAlgunoGratis);

// calificado Emmanuel VO