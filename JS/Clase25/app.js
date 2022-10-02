import { Comic } from "./Comic.js";
import { Libro } from "./Libro.js";

//Si yo quiero crear un libro
const libro = new Libro("Pepe", "Juegos del hambre", 1500, 30);
libro.verInfo();
//console.log(libro);

//Si yo quiero crear un comic:
const comic = new Comic("Juan", "It", 2000, 15, "Juan perez", "Volumen 1");
//console.log(comic);
comic.verInfo()
