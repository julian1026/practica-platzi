//clases prototipales con herencia 
function heredar(hijo, padre) {

    let noop = function () { }
    noop.prototype = padre.prototype
    hijo.prototype = new noop()
    hijo.prototype.constructor = hijo
}


function Personas(nombre, apellido, edad, lenguaje) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.lenguaje = lenguaje
}

Personas.prototype.saludar = function () {
    console.log(`hola campeon ${this.nombre} eres lo maximo`);
}
Personas.prototype.restarEdad = function () {
    let valor = this.edad - 3;
    console.log(valor);
}
Personas.prototype.leguajeFavorito = function () {
    console.log(` desde  barcelona ${this.lenguaje}`);
}


function Developer(nombre, apellido, edad, lenguaje) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.lenguaje = lenguaje
}

//invoco en este lugar para no sobreescribir los metodos propios.
heredar(Developer, Personas)



Developer.prototype.lenguajeFavorito = function () {
    console.log(` desde filipinas${this.lenguaje}`);
}
Developer.prototype.saludar = function () {
    console.log(`hola developer ${this.nombre} eres el mejor desarrollador`);
}




let julian = new Personas('julian', 'calambas', 12, 'python');
let desarrollo = new Developer('camilo', 'quintero', 40, 'javaScript');



//prototipos de otra manera

function Inventario(nombre) {
    this.nombre = nombre;
    this.articulos = [];
}

Inventario.prototype = {

    add: function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    },
    borrar: function (nombre) {
        delete this.articulos[nombre];
    },
    cantidad: function () {
        return this.articulos[nombre];
    },
    all: function () {
        return this.articulos;
    }
}

let Carros = new Inventario('nisan');
Carros.add('ford', 4);
Carros.add('nisan', 412);
Carros.add('sport', 43);

console.log(Carros.all());
