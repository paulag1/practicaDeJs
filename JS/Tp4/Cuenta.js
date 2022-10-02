export class Cuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(cantidad) {
    this.saldo += cantidad;
    console.log(`Se agrego saldo a la cuenta, quedando en ${this.saldo}`);
  }
  extraer(cantidad) {
    this.saldo -= cantidad;
    console.log(`Se quito saldo a la cuenta, quedando en ${this.saldo}`);
  }
  informar() {
    console.log(
      `Informacion de la cuenta: Titular: ${this.titular}, Saldo: ${this.saldo}`
    );
  }
}
