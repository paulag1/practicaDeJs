//1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function par(numero){
    const regex = /^[0-9]+$/
    if(numero && regex.test(numero)){
        if(numero % 2 ===0){
            console.log('Es par')
        }else{
            console.log('El numero es impar')
        }
    }else{
        console.log('no es numero');
    }
}
    par(15);