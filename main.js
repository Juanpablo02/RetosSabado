
let i = true;
let i2 = true;

while(i){
    var condicion = prompt("***** Menú *****\n1. Entrar al programa\n0. Salir del programa\nDigita la opcion: ");
    if(condicion == 1){
        let adivinar = prompt("Digita un numero: ");
        if(adivinar > 99 && adivinar < 1000000){
            var [arrayAdivinar,contadorAdivinar,cifrasAdivinar] = digitos(adivinar);
            if(contadorAdivinar > 1){
                alert("El numero a adivinar no puede tener cifras repetidas");
            } else {
                while(i){
                    var adivinando = prompt("Digite el numero que quieres adivinar (digita '0' para salir): ");
                    if(adivinando == adivinar){
                        alert("Has adivinado el número " + adivinar + " :)");
                        i = false;
                    } else if(adivinando == 0){
                        alert("Has decidido salir del programa");
                        i = false;
                    } else {
                        var [arrayAdivinando,contadorAdivinando,cifrasAdivinando] = digitos(adivinando);
                        if (cifrasAdivinando == cifrasAdivinar){
                            if(contadorAdivinando > 1){
                                alert("El numero adivinando no puede tener cifras repetidas");
                            } else {
                                var identAdivinar = 0;
                                while(identAdivinar < cifrasAdivinar){
                                    var numeroAdivinar = arrayAdivinar[identAdivinar];
                                    var identAdivinando = 0;
                                    while(identAdivinando < cifrasAdivinando){
                                        var numeroAdivinando = arrayAdivinando[identAdivinando];
                                        if(numeroAdivinar == numeroAdivinando && identAdivinar == identAdivinando){
                                            alert(numeroAdivinando + ' :)');
                                        } else if(numeroAdivinar == numeroAdivinando && identAdivinar != identAdivinando){
                                            alert(numeroAdivinando + ' :(');
                                        }
                                        identAdivinando = identAdivinando + 1;
                                    }
                                    identAdivinar = identAdivinar + 1;
                                }
                            }
                        } else {
                            alert("El numero adivinando tiene mas o menos cifras que el numero adivinar");
                        }
                    }
                }
            }
        } else {
            alert("Digite un número entre 3 y 6 cifras");
        }
    } else if (condicion == 0){
        alert("Saliste del programa");
        i = false;0
    } else {
        alert("Digite un numero correcto");
    }
}

function digitos(num){
    var cifras = 0;
    var contador = 0;
    var i = 0;
    var identificador = 0;
    let desglosado = [];
    while(i != num){
        let digito = num % 10;
        num = parseInt(num / 10);
        desglosado[identificador] = digito;
        identificador = identificador + 1;
    }
    for(numero of desglosado){
        cifras = cifras + 1;
        for(num of desglosado){
            if(numero == num){
                contador = contador + 1;
            }
        }
    }
    contador = contador - cifras;
    return [desglosado,contador,cifras];
}

/* function sacarcifras(numeros){
    var cifras = 0;
    var contador = 0;
    for(numero of numeros){
        cifras = cifras + 1;
        for(num of numeros){
            if(numero == num){
                contador = contador + 1;
            }
        }
    }
    contador = contador - cifras;
    return [contador,cifras];
} */