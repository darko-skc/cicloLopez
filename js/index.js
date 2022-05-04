alert('EJERCICIO DE LA PIRÁMIDE')
numero_de_patron = prompt("Ingresa el numero de pisos para la piramide");
caracter = '*'

for (i = 0; i <= numero_de_patron; ++i){
    caracter_repetido = caracter.repeat(i)
    document.write(caracter_repetido + '<br>')
}