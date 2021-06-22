// class Coche {
//     constructor(marca, modelo, ano) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ano = ano;
//         this.coleccion = []
//     }

//     agregar() {
//         let { marca, modelo, ano, coleccion } = this;
//         coleccion.push({ marca, modelo, ano })
//     }
//     agregar1(marca, modelo, ano) {
//         this.coleccion.push({ marca, modelo, ano });
//     }

//     mostrar(id) {
//         return this.coleccion[id];
//     }

//     general() {
//         return this.coleccion;
//     }
// }

// let carro1 = new Coche('mazda', 'akw12', 2019);

// carro1.agregar();
// carro1.agregar1('chevrolet', 'qwr12', 2012);
// carro1.agregar1('lorve', 'piu12', 2100);

// const coleccion = carro1.general();
// console.log(coleccion);
// console.log(carro1.mostrar(1));

// let data = {
//     name: 'julian',
//     surname: 'calambas',
//     age: 23
// }
// let data1 = {
//     name: 'miguel',
//     surname: 'jimenez',
//     age: 24
// }

// const array = [data]
// const array1 = [data1]
// const datos = [...array, ...array1]

// const menor = datos.filter(({ age }) => {
//     return age < 24
// })
// console.log(menor)

// const mayor = datos.filter(value => value.age > 23);

// fibonacci

let aux = 0, a = 0, b = 1, x = 0, fibonacci = 4, star = [];
while (aux < fibonacci) {
    x = a + b;
    a = b;
    b = x;
    star.push(x);
    aux++;
}


star.map(value => {
    let bandera = 0;
    cadena = '';
    while (bandera < value) {
        cadena += '*';
        bandera++;
    }
    console.log(cadena);
})
