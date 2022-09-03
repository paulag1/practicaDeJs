let cadena = prompt("Ingrese un texto");
let salida= ''

for (let i = 0; i < cadena.length; i++) {
  let caracter = cadena.charAt(i);

  if(i=== cadena.length-1){
    salida =salida + caracter;
  } else{
      salida= salida + caracter + '-'
    }
}

console.log(salida)
