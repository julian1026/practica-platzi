
const numeros = (function () {
    let _contador = 0;

    function sumar() {
        return _contador++;
    }

    function restar() {
        return _contador--;
    }

    function mostrar() {
        return _contador;
    }

    return { sumar, restar, mostrar }
})();



numeros.sumar();
numeros.sumar();
console.log(numeros.mostrar());



let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let multiplos = numeros.filter((valor) => {
    return valor % 2 === 0
});


console.log(multiplos);

let datos = [
    { cantidad: 2, edad: 12, nombre: 'julian' },
    { cantidad: 3, edad: 32, nombre: 'milena' },
    { cantidad: 4, edad: 18, nombre: 'andres' },
    { cantidad: 5, edad: 17, nombre: 'milan' },
]
let reducir = datos.filter(({ cantidad }) => {
    return cantidad % 2 === 0;
})

let mayorEdad = datos.filter(({ edad }) => {
    return edad >= 18;
})
console.log(mayorEdad.sort());