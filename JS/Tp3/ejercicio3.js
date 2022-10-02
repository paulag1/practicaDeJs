//1er paso: lanzar dos dados y almacenar sus valores en variables
//2do paso: sumar los valores de los dos dados
//3er paso: guardar en arreglo el numero de apariciones de la suma
//4to paso: repetir 50 veces
//5to paso: mostrar el array

const numeroAleatorio = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};
const sumas = [];

for (let i = 0; i < 50; i++) {
  const dado1 = numeroAleatorio(1, 7);
  const dado2 = numeroAleatorio(1, 7);

  console.log(dado1, dado2);

  const suma = dado1 + dado2;

  console.log(suma);

  sumas.push(suma);
}
console.log(sumas);

let cantidadDe12 = 0;
sumas.forEach((elemento) => {
  if (elemento === 12) {
    cantidadDe12++;
  }
});

//VER BIEN ESTE PUNTO, NO ESTA TERMINADO