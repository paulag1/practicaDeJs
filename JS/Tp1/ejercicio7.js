const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));
const num3 = Number(prompt("Ingrese el tercer numero"));

if(num1>num2 && num1>num2){
    console.log('El primero es el mayor');
} else if(num2>num1 && num2>num3) {
    console.log('El segundo es el mayor')
} else if(num3>num1 && num3>num2){
    console.log('El tercero es el mayor')
}  
else{
        console.log('Los tres numeros son iguales');
    }