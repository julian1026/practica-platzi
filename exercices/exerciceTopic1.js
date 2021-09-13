

//1)Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/*
let cadena = 'escoge la felicidad';
function CountCadena(cadena) {
    if (typeof (cadena) === 'string') {
        return console.log(cadena.length)
    }
    return console.log('valor no valido')
}

CountCadena(12)

*/

//2)  Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

/*
function Reducir(cadena, corte) {
    let valor = '';
    if (typeof (cadena) === 'string') {
        valor = cadena.slice(0, corte);
        return console.log(valor);
    }
    return console.log('valor no correcto');
}

Reducir('hola campeon', 4)

*/


//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

/*
function transformarCadena(cadena) {
    if (typeof (cadena) === 'string') {
        let valor = cadena.split(' ');
        return console.log(valor);
    }

    return console.log('valor no admitido');
}

transformarCadena('hola eres muy especial para mi');

*/

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


/*
function print(cadena, times) {
    let initial = 0;
    while (initial < times) {
        console.log(cadena)
        initial++;
    }
}

print('Dios mio ;) te amo...', 5)


https://www.tiktok.com/@mayugarcia/video/6997600786528095493?sender_device=pc&sender_web_id=6948241156187375109&is_from_webapp=v1&is_copy_url=0

crecer es aprender a despedirse
*/


/*

let datos = [
    { name: 'daniel', lastname: 'andrade', cod: 123 },
    { name: 'milena', lastname: 'jimenez', cod: 221 },
    { name: 'julian', lastname: 'sanches', cod: 443 },
]

let cod = 123;

let valor = datos.filter(person => (person.cod !== cod))

employes = { name: 'camilo', lastname: 'fernandez', cod: 1222 }

let allEmployes = [...valor, employes];
console.log(allEmployes);

*/

let namesPersons = [
    'julian',
    'julian',
    'antonella',
    'daniel',
    'milena',
    'julian',
    'milena',
    'antonella',
    'antonella',
    'antonella',
]

let names = {};
let cambio = 4;
namesPersons.forEach(name => {
    names[name] = !names[name] ? 1 : names[name] += 1;
})

// let result = Object.keys(names).map(name => ({ name: name, times: names[name] }));

let result = Object.keys(names)
    .map(name => { return { name: name, times: names[name] } })
    .sort((a, b) => { return (b.times - a.times) })
    .slice(0, 3);

const [...copy] = result;

let index = copy.findIndex(value => (value.times === cambio));
personOne = copy[index];

copy[index] = { ...personOne, name: 'sofia antonella' }

console.log(result);
console.log(copy);

const word = 'palabra';
const latters = [...word]
console.log(latters)


let fruits = [{ name: 'pera', madura: false }]
let [...totalFruits] = fruits;
totalFruits[0] = { ...totalFruits[0], name: 'mango' }

console.log(totalFruits);
console.log(fruits);


/*
let fruits = { name: 'pera', madura: false }
const { ...totalFruits } = fruits;
totalFruits.name = 'manzana';

console.log(totalFruits);
console.log(fruits);
*/


let cars = [
    { name: 'BMW', count: 12 },
    { name: 'ALFA ROMEO', count: 30 },
    { name: 'TOYOTA', count: 21 },
]
let [...carsCopy] = cars;

let index = carsCopy.findIndex(value => (value.name === 'BMW'));
carsCopy[index] = { ...carsCopy[index], name: 'BMWZ' }
console.log(carsCopy);
console.log(cars)