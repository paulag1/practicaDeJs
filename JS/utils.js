// Quiero una funcion que me permite hace el factorial 8!
// 1ra manera:
export function factorial(numero) {
  let res = 1;

  for (let i = numero; i > 0; i--) {
    res = res * i;
  }
  return res;
}

// funcion para poner primera letra de un string en mayuscula
//funciona igual que una funcion, 2da manera:
export const primeraLetraMayuscula = (cadena) => {
  let primeraLetra = cadena.charAt(0);
  primeraLetra = primeraLetra.toUpperCase();
  //  console.log(primeraLetra);

  let cadenaEnMinuscula = cadena.toLowerCase();
  //  console.log(cadenaEnMinuscula)

  cadenaEnMinuscula = cadenaEnMinuscula.slice(1);
  //  console.log(cadenaEnMinuscula)

  const cadenaResultante = primeraLetra + cadenaEnMinuscula;
  //  console.log(cadenaResultante)

  return cadenaResultante;
};

//1er paso: recibir la cadena
//2do paso: separamos la primera letra
//3r paso: la ponemos en mayus
//4to paso: dejar el resto de la cadena en minuscula
//5to paso: volver a armar la cadena
//6to paso: devolver el valor

//quiero validar que el usuario este ingresando un e mail

export const validarEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regex.test(email)) {
    // console.log('Cumple el patron')
    return true;
  } else {
    // console.log('No cumple el patron')
    return false;
  }
};

export const imprimirObjeto = (claves, valores) => {
  claves.forEach((clave, index) => {
    const valor = valores[index];
    document.write(`<p>${clave}: ${valor}<br></p>`);
  });
};

export const generarId = (n) => {
  let id = "";
  for (let i = 0; i < n; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
};
