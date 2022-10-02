export class AgendaDeContactos {
  constructor(tamanioTotal) {
    this.contactos = [];
    this.tamanioTotal = tamanioTotal;
  }
  aniadirContacto(contacto) {
    if (this.contactos.length === this.tamanioTotal) {
      console.log("La agenda esta llena");
    } else {
      this.contactos.push(contacto);
    }
  }

  existeContacto(nombre) {
    const contacto = this.contactos.find((contacto) => {
      return contacto.nombre.toLowerCase() === nombre.toLowerCase();
    });
    if (contacto === undefined) console.log("No existe el contacto");
    else console.log("Existe el contacto");
  }

  listarContactos() {
    this.contactos.forEach((contacto) => {
      console.log(`Nombre: ${contacto.nombre}, Tel: ${contacto.numero}`);
    });
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((contacto) => {
      return contacto.nombre.toLowerCase() === nombre.toLowerCase();
    });
    if (contacto === undefined) console.log("No existe el contacto");
    else console.log(`El numero de ${contacto.nombre} es ${contacto.numero}`);
  }

  eliminarContacto(nombre) {
    const indice = this.contactos.findIndex((contacto) => {
      return contacto.nombre.toLowerCase() === nombre.toLowerCase();
    });
    if (indice === -1) console.log("No existe el contacto");
    else {
      this.contactos.splice(indice, 1);
    }
  }

  agendaLlena() {
    if (this.contactos.length === this.tamanioTotal) {
      console.log("La agenda esta llena");
    } else {
      console.log("La agenda aun tiene lugar");
    }
  }

  huecosLibre() {
    const huecos = this.tamanioTotal - this.contactos.length;
    console.log(`Quedan ${huecos} espacios disponibles`);
  }
}
