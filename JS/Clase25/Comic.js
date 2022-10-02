import { Libro } from "./Libro";

export class Comic extends Libro {
  constructor(autor, titulo, precio, stock, ilustradores, volumen) {
    super(autor, titulo, precio, stock);
    this.ilustradores = ilustradores;
    this.volumen = volumen;
  }
  verInfo(){
    console.log(this.autor, this.titulo, this.precio, this.stock, this.id, this.ilustradores, this.volumen);
  }

 
  //como el comic ES UN TIPO DE LIBRO, se puede hacer una jerarquia. Entonces la subclase Comic puede HEREDAR las propiedades y metodos del padre y ademas de sus propias propiedades
  //super es llamar al constructor de la clase padre
}
