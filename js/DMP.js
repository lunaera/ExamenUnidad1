// Demetrio Montaño Pérez

const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Impresora", precio: 450 },
    { nombre: "Escritorio", precio: 150 },
    { nombre: "Silla", precio: 90 },
    { nombre: "Auriculares", precio: 120 },
    { nombre: "Disco Duro", precio: 75 },
    { nombre: "Smartphone", precio: 800 }
];

// Filtrar productos con precio mayor a 100
const caros = productos.filter(p => p.precio > 100);

console.log("Productos con precio mayor a $100:");
console.table(caros);


// Excelente Demetrio