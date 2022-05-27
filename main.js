// Ejercicio WHILE

let user = prompt('Esto es una calculadora. \n\nIngrese su usuario, si no quiere ingresar su usuario ingrese "salir"')

while (user != 'continuar') {
    
    if (user == 'salir'){
        break
    }

    console.log('Bienvenido ' + user);

    user = prompt('Bienvenido ' + user + '.\nEscriba "continuar" para avanzar a la calculadora')
}




//Ejercicio FOR

let multiplicando = parseFloat(prompt('Que numero desea multiplicar? '))
let multiplicador = parseInt(prompt('Cuantas veces desea multiplicarlo? '))

for (let i = 1; i <= multiplicador ; i++) {
    
    producto = multiplicando * i;
    console.log( multiplicando + 'x' + i + '=' + producto);
    
}