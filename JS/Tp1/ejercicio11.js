//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let n1 = prompt("Escribe un numero");

if (n1 % 2 == 0 || n1 % 3 == 0 || n1 % 5 == 0 || n1 % 7 == 0) {
  if (n1 % 2 == 0) {
    document.write("El numero es divisible por 2");
  }
  if (n1 % 3 == 0) {
    document.write("El numero es divisible por 3");
  }
  if (n1 % 5 == 0) {
    document.write("El numero es divisible por 5");
  }
  if (n1 % 7 == 0) {
    document.write("El numero es divisible por 7");
  }
} else {
  document.write("El numero no es divisible");
}
