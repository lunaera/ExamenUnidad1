let fechas = ["2023-01-01", "2022-05-10", "2024-03-15"];

fechas.sort((a, b) => new Date(a) - new Date(b));

console.log(fechas);
