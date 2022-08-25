const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));
const num3 = Number(prompt("Ingrese el tercer numero"));

if(num1>num2 && num1>num2){
    console.log('El primero es el mayor');
} else if(num1 === num2) {
    console.log('El primero y el segundo son iguales')
} else if(num1===num3){
    console.log('El primero y el tercero son iguales')
}
    else{
        console.log('El primero NO es mayor que los otros');
    }

 if(num2>num1 && num2>num3){
        console.log('El segundo es el mayor');
    } else if(num1 === num2 && num1!=num3) {
        console.log('El primero y el segundo son iguales')
    } else if(num2===num3){
        console.log('El segundo y el tercero son iguales')
    }
        else{
            console.log('El segundo NO es mayor que los otros');
        }

if(num3>num1 && num3>num2){
            console.log('El primero es el mayor');
        } else if(num3 === num2) {
            console.log('El tercero y el segundo son iguales')
        } else if(num1===num3){
            console.log('El primero y el tercero son iguales')
        }
            else{
                console.log('El tercero NO es mayor que los otros');
            }