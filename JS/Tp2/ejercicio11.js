let nombre1, edad1, nombre2, edad2, nombre3, edad3;


while (true) {
  nombre1 = prompt("ingrese el primer nombre");
  edad1 = prompt("ingrese la primera edad");

  if (edad1 !== null && !isNaN(edad1) && edad1>=0) {
    edad1 = Number(edad1);
    break;
  }
}
while (true) {
  nombre2 = prompt("ingrese el segundo nombre");
  edad2 = prompt("ingrese la segunda edad");

  if (edad2 !== null && !isNaN(edad2) && edad1>=0) {
    edad2 = Number(edad2);
    break;
  }
}
while (true) {
  nombre3 = prompt("ingrese el tercer nombre");
   edad3 = prompt("ingrese la tercera edad");

  if (edad3 !== null && !isNaN(edad3) && edad1>=0) {
    edad3 = Number(edad3);
    break;
  }
}

const mayor= math.max(edad1, edad2, edad3);
console.log(mayor)

if(mayor=== edad1){
    console.log('El de mayor edad es '+nombre1)
} else if (mayor===edad2){
    console.log('El de mayor edad es' +nombre2)
} else{
    console.log('el de mayot edad es' +nombre3)
}