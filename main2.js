
var numeros = [5,2,4,3,7,6];
var identificador = 6;
var numero2 = [7,5,4,3,9,6];
var indetificador2 = 6;



let i = true;
while(i){
    var condicion = prompt("***** Menú *****\n1. Entrar al programa\n0. Salir del programa\nDigita la opcion: ");
    if(condicion == 1){
        


    } else if (condicion == 0){

        alert("Saliste del programa");
        i = false;

    } else {
        alert("Digite un numero correcto");
    }
}


/* while(i < identificador){
    var numero = numeros[i];
    console.log(numero + ' Esta es la posicion ' + i);
    i2 = 0;
    while(i2 < indetificador2){
        var numero3 = numero2[i2];
        console.log(numero3 + ' Esta es la posicion ' + i2 +' '+ numero +' '+ i);
        if(numero == numero3 && i == i2){
            console.log(numero3 + ' :)')
        } else if(numero == numero3 && i != i2){
            console.log(numero3 + ' :(')
        }
        i2 = i2 + 1;
    }
    i = i + 1;
} */




