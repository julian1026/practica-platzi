// console.log('hola campeon');

//se ejecuta una sola ves

/*
setTimeout(() => {
    console.log('bienvenido Julian Andres Calamabas');
}, 3000);


//se ejecuta cada cierto tiempo
setInterval(() => {
    console.log(new Date().toTimeString())
}, 2000)

*/

/*
let hora = setTimeout(() => {
    console.log('bienvenido Julian Andres Calamabas');
}, 1000);

// clearTimeout(hora)
console.log('despues del setTimeOut')

let segundo = setInterval(() => {
    console.log('cada segundo')
}, 1000)

clearInterval(segundo)
console.log('despues del setInterval')
*/

/*

procesamiento single thread and multi thread
= operartions of cpu and operations of I/O
=operaciones concurrentes y paralelas
=operaciones bloqueantes y no bloqueantes
=operaciones Sincronicas y asincronas

*/



/*
//codigo sincrono bloqueante
console.log('codigo asincrono')
console.log('inicio')

function Dos() {
    console.log('Dos')
}


function Uno() {
    console.log('Uno')
    Dos();
    console.log('tres')
}

Uno();
console.log('Fin');


javascript usa un modelo asincrono y no bloqueante
con un loop de eventos implementado en un solo hilo
,(single thread) para operaciones de entrada y salida
(input/output)
*/


//codigo asincrono no bloqueante
//curso de creacion nfts
/*
(() => {
    console.log('codigo asincrono')
    console.log('inicio')

    function Dos() {
        setTimeout(function () {
            console.log('dos')
        }, 1000)
    }


    function Uno() {
        setTimeout(function () {
            console.log('Uno')
        }, 0)
        Dos();
        console.log('tres')
    }

    Uno();
    console.log('Fin');
})();


// let person={name:'carlos'}
// const members=person;
// person=null;

*/

function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value * value);
    }, 0 | Math.random() * 1000)
}



cuadradoCallback(0, (value, result) => {

    console.log(`callback ${value} , ${result}`)

    cuadradoCallback(1, (value, result) => {

        console.log(`callback ${value} , ${result}`)

        cuadradoCallback(2, (value, result) => {

            console.log(`callback ${value} , ${result}`)
        })
    })

})