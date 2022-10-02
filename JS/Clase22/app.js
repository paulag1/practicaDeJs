import { factorial, primeraLetraMayuscula, validarEmail } from "./utils.js";

const resultadoFactorial = factorial(8);
console.log(resultadoFactorial);

const str = "hola SOY PAUla y estoy Estudiando";
const candena = primeraLetraMayuscula(str);
console.log(candena);

//forma para que se pongan todos los espacios cuando se concatenan las funciones
const texto = 'Paula'
const texto2= 32
const resultado = texto + texto2
const datos= `Su nombre es ${texto} y tiene ${texto2} anios`
console.log(datos)


const email = 'paulaguillen@gmail.com'
const emailValidado = validarEmail(email)

if(emailValidado) console.log('Email valido')
else console.log('Email no valido')
