const palabras = ["Hola", "mundo", "JS"];

const resultado = palabras.reduce((acumulador, palabra) => {
  return acumulador + " " + palabra;
});

console.log(resultado); // "Hola mundo JS"
