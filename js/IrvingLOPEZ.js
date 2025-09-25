// Irving LOPEZ - Verificar si un arreglo contiene un número específico

// 1. Declaramos el arreglo de números
const numeros = [5, 10, 20, 50, 75, 100, 150];

// 2. Creamos una función que verifica si un número está en el arreglo
function contieneNumero(arreglo, numero) {
  return arreglo.includes(numero);
}

// 3. Verificamos si el arreglo contiene el número 100
if (contieneNumero(numeros, 100)) {
  console.log("El arreglo contiene el número 100 ");
} else {
  console.log("El arreglo NO contiene el número 100 ");
}

// ejercicio resuelto por Irving LOPEZ GALVAN 