while (true) {
  const numero1 = Number(prompt("Ingrese el primer numero")); //deberia validar el numero, corregir esto
  const numero2 = Number(prompt("Ingrese el segundo numero"));

  const opcion = prompt(
    "Bienvenido, seleccione una opcion: \n 1. sumar  \n 2. restar \n 3. multiplicar \n 4. dividir \n 5. salir"
  );

  let resultado;
  let salida = false; //variable bandera: asumo que no se va a salir

  switch (opcion) {
    case "1": {
      //sumar
      resultado = numero1 + numero2;
      break;
    }
    case "2": {
      //restar
      resultado = numero1 - numero2;
      break;
    }
    case "3": {
      //multiplicar
      resultado = numero1 * numero2;
      break;
    }
    case "4": {
      //dividir
      if (numero2 === 0) {
        alert("El denominador es 0 y no se puede dividir");
        break;
      }
      resultado = numero1 / numero2;
      break;
    }
    case "5": {
      //salir
      salida = true; //si se selecciona salir, que sea true, queda verificar que se quiere salir al final del programa
      break;
    }
    default: {
      //cualquier otro valor
      alert("La opcion ingresada no es valido");
      break;
    }
  }
  if (resultado === 0 || resultado) {
    alert(`El resultado es ${resultado}`);
  } //si se ingresa algo que no sea un numero, no me muestra nada y pide de nuevo los numeros

  if (salida) {
    break; //aqui se verifica que se quiere salir, este break afecta al WHILE
    //si no se pone este se va a seguir repetiendo infinitas veces
  }
}

