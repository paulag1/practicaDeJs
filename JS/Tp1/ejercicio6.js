const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));

if(num1>num2){
    console.log('El primero es mayor que el segundo');
} else if(num1 === num2) {
    console.log('Los numeros son iguales')
}
    else{
        console.log('El primero NO es mayor que el segundo');
    }