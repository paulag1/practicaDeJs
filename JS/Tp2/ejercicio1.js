// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. Repetir hasta que el usuario toque cancelar.

while (true) {
  const edad = prompt("Ingrese la edad");

  if(edad === null) break;

  if (Number(edad) >= 18) {
    console.log("Puede manejar");
  } else if(Number(edad)<18 && Number(edad)>=0){
    console.log("No puede manejar");
  }
  else {
    console.log("Numero no valido");
  }
}
console.log('Hasta luego!')

//Siempre que haya un while true necesita una condicion de salida como break sino seria infinito