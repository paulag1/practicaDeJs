import { AgendaDeContactos } from "./Clases/AgendaDeContactos.js";
import { Contacto } from "./Clases/Contacto.js";

const agenda = new AgendaDeContactos(10);

agenda.aniadirContacto();

const juan = new Contacto("Juan", 3816526396);
const pepe = new Contacto("Pepe", 3815471236);
agenda.aniadirContacto(juan);
agenda.aniadirContacto(pepe);
//console.log(agenda)
agenda.existeContacto("Juan");
agenda.existeContacto("Juana");
agenda.listarContactos();
agenda.buscarContacto("Juan");
agenda.eliminarContacto("Juan");
agenda.listarContactos();
agenda.agendaLlena();
agenda.huecosLibre();
