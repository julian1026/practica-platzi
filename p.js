class Coche {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.coleccion = []
    }

    agregar() {
        let { marca, modelo, ano, coleccion } = this;
        coleccion.push({ marca, modelo, ano })
    }
    agregar1(marca, modelo, ano) {
        this.coleccion.push({ marca, modelo, ano });
    }

    mostrar(id) {
        return this.coleccion[id];
    }

    general() {
        return this.coleccion;
    }
}

let carro1 = new Coche('mazda', 'akw12', 2019);

carro1.agregar();
carro1.agregar1('chevrolet', 'qwr12', 2012);
carro1.agregar1('lorve', 'piu12', 2100);

const coleccion = carro1.general();
console.log(coleccion);

