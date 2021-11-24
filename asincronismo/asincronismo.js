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

/*

//callback
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

*/

/*

function cuadradoPromise(value) {
    if (typeof (value) !== 'number') {
        return Promise.reject(`el valor ingresado ${value} no es un numero`)
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ value, result: value * value })
        }, 0 | Math.random() * 1000)
    })
}
cuadradoPromise(3)
    .then((obj) => {
        console.log(`value ${obj.value} su cuadrado es ${obj.result}`)
        return cuadradoPromise('4')
    })
    .then(obj => {
        console.log(`value ${obj.value} su cuadrado es ${obj.result}`)
    })
    .catch(error => console.log(error))

    async function Asincrona() {
        try {
            console.log('comenzando asincronismo')
            let obj = await cuadradoPromise(0);
            console.log(`value ${obj.value} su cuadrado es ${obj.result}`)
            obj = await cuadradoPromise(4);
            console.log(`value ${obj.value} su cuadrado es ${obj.result}`)

        } catch (error) {

        }
    }

    Asincrona();


    */


/*
//tipo de dato SET
//entendiendo como funciona el tipo de  set en javascript, este metodo elimina elementos repetidos de un arreglo
const Think = [11, 11, 2, 4, 5, 'hola', 'hola', {}, {}]
const set = new Set(Think);
// console.log(set)
set.delete() //elimina un valor del set
set.has() //verifica si un elemento esta en el set
//set.clear() //deja la coleccion vacia
const set2 = new Set();
set2.add(1)
set2.add(2)
set2.add(3)
set2.add(2)
set2.add(4)
let a1 = Object.keys(set);
let a2 = Array.from(set2)
console.log(a1)
console.log(a2)


*/


/*

//TIPO DE DATO MAPS


let mapa = new Map();
mapa.set('nombre', 'julian')
mapa.set('apellido', 'calambas')
mapa.set('age', 23)// el metodo se me permite agregar un nuevo elemento al objeto
console.log(mapa)
mapa.has('correo');  //metodo has permite verificar si la key existe o no
console.log(mapa.get('nombre'))//el metedo get me permite obtener los valores
console.log(mapa.has('nombre'))
mapa.delete('apellido')//elimina un elemento de la coleccion
console.log(mapa)
for (let [key, value] of mapa) {
    console.log(`key : ${key}, valor : ${value}`)
}


//otra forma de inicializar un maps

let mapa2 = new Map([
    ['nombre', 'daniel'],
    ['age', 24],
    ['gender', 'male'],
    [null, 'nulo']
])
const llavesMapa2 = [...mapa2.keys()];
const valuesMapa2 = [...mapa2.values()];
console.log(llavesMapa2)
console.log(valuesMapa2)


let d={
    name:'anonimo',
    surname:'anonimo',
    age:null
}
console.log(d)

*/



/*

//Tipos Weaksets

const ws = new WeakSet();// een la misma instancia no se puede mandar valores

letllave1 = { 'name': 'daniel' }
letllave22 = { 'name': 'sandra' }
letllave33 = { 'name': 'milena' }

ws.add(v1)
ws.add(v2)
ws.add(v3)

console.log(ws)
// ws.delete(v3)
console.log(ws.has(v1))

setInterval(() => {
    console.log(ws)
}, 1000)

setTimeout(() => {
    v1 = null
    v2 = null
    v3 = null
}, 5000)
console.log(ws)

*/

/*
let wm = new WeakMap(); //en la misma instancia no se puede mandar valores

let llave1 = {}
let llave2 = {}
let llave3 = {}
wm.set(llave1, 1)
wm.set(llave2, 2)
wm.set(llave3, 3)

console.log(wm)
console.log(wm.has())
console.log(wm.get(llave1))

setInterval(() => {
    console.log(wm)
}, 1000)

setTimeout(() => {
    llave1 = null
    llave2 = null
    llave3 = null
}, 5000)
console.log(wm)

*/


/*

//iterable e iterador

let iterable = 'holacampeon' //new Set([1, 2, 2, 2, 3, 4, 5, 6, 6])

let iterador = iterable[Symbol.iterator]();
console.log(iterable)
console.log(iterador)
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

let next = iterador.next();
while (!next.done) {
    console.log(next.value)
    next = iterador.next();
}

*/

/*
//GENERATORS  clase 55

function* iterable() {
    yield 'hola'
    console.log('que mas campeon')
    yield 'hola 2'
    console.log('que mas campeon')
    yield 'hola3'
    console.log('que mas campeon')
    yield 'hola4'
    yield 'hola5'
}

let iterador = iterable();
console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

for (let y of iterador) {
    console.log(y)
}

const arr = [...iterable()]
console.log(arr)

//otro ejemplo

function cuadrado(valor) {
    setTimeout(() => {
        return console.log({ valor, resultado: valor * valor })
    }, Math.random() * 1000)
}

function* generador() {
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
}

const gen = generador();

for (let y of gen) {
    console.log(y)
}

*/






/*


//PROXY, crea una copia del objeto principal, donde la copia se encuentra  relaciionada con la principal, en la copia se puede establecer restricciones que se validaran.   56

const persona = {
    name: 'julian',
    surname: 'calambas',
    age: 23,
    son: {
        name: 'danilo'
    }
}

const manejador = {
    set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`la propiedad ${prop} no se encuentra en el objeto persona`)
        }
        if ((prop === 'name' || prop === 'surname') && (/[^A-Za-z\d]/.test(valor))) {
            return console.error(`la propiedad ${prop} solo acepta caracteres que se han letras`)
        }
        obj[prop] = valor;
    }
}

const json = new Proxy(persona, manejador)
json.name = 'goe##'
json.surname = 'orodonez12'
json.age = 24,
    json.github = 'julian1026'
console.log(json);
console.log(persona);


// let validar = (/[^A-Za-z\d]/.test('amor#'))
// console.log(validar)

*/




/*

//PROPIEDADES DINAMICAS DE LOS OBJETOS

let objPersons = {};
console.log(objPersons)

let namePersons = ['danniel', 'julian', 'david', 'andreid'];

namePersons.forEach((value, index) => objPersons[`id${index}`] = value);
console.log(objPersons)


*/







let products = [
    { id: 1, name: 'jabon', price: 2000 },
    { id: 1, name: 'jabon', price: 2000 },
    { id: 2, name: 'sal', price: 700 },
    { id: 2, name: 'sal', price: 700 },
    { id: 2, name: 'sal', price: 700 },
    { id: 2, name: 'sal', price: 700 },
    { id: 2, name: 'sal', price: 700 },
    { id: 2, name: 'sal', price: 700 },
    { id: 1, name: 'jabon', price: 2000 },
    { id: 1, name: 'jabon', price: 2000 },
    { id: 1, name: 'jabon', price: 2000 },
    { id: 1, name: 'jabon', price: 2000 },
    { id: 1, name: 'jabon', price: 2000 },
    { id: 1, name: 'jabon', price: 2000 },
    { id: 1, name: 'jabon', price: 2000 },
    { id: 1, name: 'jabon', price: 2000 },
    { id: 1, name: 'jabon', price: 2000 },
]


let product = {};
// products.forEach(value => {
//     product[value.name] = product[value.name] ? product[value.name] += value.price : value.price;
// })
products.forEach(({ name, id, price }) => {
    product[name] = product[name] ?
        {
            ...product[name],
            "total": product[name].total += price,
            "times": product[name].times += 1
        }
        : { id, name, price, total: price, times: 1 };
})
console.log(product)

for (let i in product) {
    console.log(product[i])
}
