
from traceback import print_tb
from unittest import result

def meterNumeros():
    numeros =  []
    for i in range(0,20,1):
        numero = int(input("Digite un número: "))
        numeros.insert(i,numero)
    buscar = int(input("Digite el numero a buscar: "))
    for numero in numeros:
        if numero == buscar:
            resultado = "Resultado es exitoso"
            break
        else: 
            resultado = "No se encontro ningun numero igual"
    print(resultado)
meterNumeros()


def meterNumeros():
    numeros =  []
    for i in range(0,20,1):
        numero = int(input("Digite un número: "))
        numeros.insert(i,numero)
    buscar = int(input("Digite el numero a buscar: "))
    contador = 0
    for numero in numeros:
        if buscar == numero:
            contador = 1
            
    if contador > 0:
        resultado = "Resultado es exitoso"
    else: 
        resultado = "No se encontro ningun numero igual"
        
    print(resultado)
meterNumeros()