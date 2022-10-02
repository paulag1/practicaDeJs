/*let usuarioPaula = {
  nombre: "Paula",
  apellido: "Guillen",
  domicilio: "La Paz 355",
  email: "paulaguillen.iq@gmail.com",
  comprar: () => {},
  vender: () => {},
  loguear: () => {},
};

const claves = Object.keys(usuarioPaula);
const valores = Object.values(usuarioPaula);

console.log(claves);

claves.forEach((clave, index) => {
  const valor = valores[index];
  document.write(`<p>${clave}: ${valor}<br></p>`);
});
*/
import {Usuario} from './Usuario.js'
let usuarioPaula = new Usuario("Paula", "Guillen", "paula@gmail.com");

usuarioPaula.loguear()
//no funciona