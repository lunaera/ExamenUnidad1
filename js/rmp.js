const personas = [
    { nombre: "Luis", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 40 }
];

const frases = personas.map(p => `${p.nombre} tiene ${p.edad} años`);

console.log(frases);
// Resultado:
// ["Luis tiene 30 años", "Ana tiene 25 años", "Carlos tiene 40 años"]
