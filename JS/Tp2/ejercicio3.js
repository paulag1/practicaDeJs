//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cade

let resultado = '';
do {
	let palabra = prompt('Ingresa una palabra');
	if (resultado == '') {
		//si es la primer palabra, concateno sin usar el guion
		resultado = palabra;
	} else {
		resultado = resultado + '-' + palabra;
	}
} while ( confirm('¿Desea continuar?'));

document.write(resultado);

/*let resultado = "";
do {
  let palabra = prompt("Ingrese una palabra");
  if (resultado == "") {
    //si es la primera palabra concateno sin usar guion
    resultado = palabra;
  } else {
    resultado = resultado + "-" + palabra;
  }
} while (confirm("Desea continuar?"));

console.log(resultado)

document.write(resultado);
*/
