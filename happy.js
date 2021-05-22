let llenar = 10,
    numeros = [],
    i = 0;

for (i; i < llenar; i++) {
    numeros[i] = i;
}

let aux,
    z = 0,
    j = 1,
    idice_p = 0,
    primos = [];

let tamano = numeros.length;

for (z; z < tamano; z++) {
    aux = 0;
    for (j; j <= numeros[z]; j++) {
        if (numeros[z] % j == 0) {
            aux++;
        }
        if (aux > 2) {
            j += numeros[z];
        }
    }
    if (aux == 2) {
        primos[idice_p] = z;
        idice_p++;
    }
    j = 1;
}

// console.log(primos);


// const elementos = 1000;
// const primos = [];
// let iteraciones = 0;

// for(let candidato = 2; candidato <= elementos; candidato++) {
//     let primo = true;
//     for(let divisor=2; divisor < candidato; divisor++) {
//         if(candidato%divisor === 0) {
//             primo = !primo;
//             break;
//         }
//     }
//     if(primo) primos.push(candidato);
// }
