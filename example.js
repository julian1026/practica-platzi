// let libros={
//     title:'harry poter y el pricionero de scabal',
//     autor:'kevin london',
//     page:'julian andres calambas',
//     formato:['pdf','epub','mubi'],
//     num:976
// }
// libros.title='camino hacia el amor';
// libros.mensaje='disfruta cada dia de la vida'
// libros['despedidad']='se tu mismo';
// console.log(libros);


// let motos={
//     marca:'suziki',
//     velocidad:function(a,b){
//         let valor=a+b;
//         console.log(`la velocidad es de ${valor} km/sg`)
//     }
// }

// // let moto2=new Object(motos);
// let moto2=motos;
// moto2.velocidad(12,12);

// console.log(moto2);

// var libro = {
//     titulo: "Desarrollo Web ágil con AngularJS",
//     autor: {
//     nombre: "Carlos Azaustre",
//     nacionalidad: "Española",
//     edad: 30,
//     contacto: {
//     email: "carlosazaustre@gmail.com",
//     twitter: "@carlosazaustre"
//     }
//     },
//     editorial: {
//     nombre: "carlosazaustre.es Books",
//     web: "https://carlosazaustre.es"
//     }
//     };
//     libro.autor.nombre='anddres';
//    console.log(libro.autor.nombre);


// let numeros=[1,5,3,7,9,4,2];
// // console.log(numeros.sort())
// // console.log(numeros.pop())

// let d=[{valor:12,nombre:'sinia'},
// {valor:1,nombre:'julian'}];
// // d.reverse();

// console.log(d);

// numeros.map((valor,index)=>{
//  valor*=2;
//     console.log(valor);
// })

// let numeros=[1,5,3,7,9,4,2];
// numeros.filter(elemento=>{
//     return elemento%3===0;
// })

// let fecha=new Date();
// fecha=fecha.toString();
// console.log(fecha)
// fecha=fecha.split(" ");
// console.log(fecha);


// function saludar(mensaje){
//     let m=mensaje||'wellcome user';
//     return m;
// }

// console.log(saludar());
// // funciones anidadas
// let a='julian';

// function global(){
//     let b='andres';

//     function local(){
//         let c='calambas';
//         return a+b+c;
//     }

//     return local;
// }

// console.log(global()());


// // funciones closure o cierre


// let miContador=(function(){
//     let _contador=0;

//     function incrementar(){
//         return _contador++;
//     }

//     function decrementar(){
//         return _contador--;
//     }

//     function valor(){
//         return _contador;
//     }

//     return {
//         incrementar:incrementar,
//         decrementar:decrementar,
//         valor:valor
//         }
        
    

// })();

// miContador.incrementar();
// miContador.incrementar();

// console.log(miContador.valor());




// let carro=(function(){
//     let _velocidad=0;

//     function add(){
//         return _velocidad++;

//     }

//     function remove(){
//       return _velocidad--;
//     }

//     function show(){
//         return _velocidad;
//     }

//     return {
//         add:add,
//         remove:remove,
//         show:show
//     }
// })();

// carro.add();
// carro.add();

// console.log(carro.show());


// // FUNCTION COMO CLASE

// function inventario(nombre){
//     let _nombre=nombre;
//     let _articulos=[];

//     function add (nombre,cantidad){
//         _articulos[nombre]=cantidad;
//     }
//     function borrar(nombre){
//         delete _articulos[nombre];
//     }
//     function cantidad(nombre){
//         return _articulos[nombre];
//     }

//     function nombre1(){
//         return _nombre;
//     }

//     return {
//         add:add,
//         borrar:borrar,
//         cantidad:cantidad,
//         nombre:nombre1

//     }
// }

// let books= inventario('books');
// books.add('angularJS', 3);
// books.add('javaScript', 10);
// books.add('nodeJS',5);
// console.log(books.cantidad('angularJS'))






// function tiquete(nombre){
//     this.nombre=nombre;
//     this.articulo=[];

//     this.add=function(nombre,cantidad){
//         this.articulo[nombre]=cantidad;
//     }
//     this.borrar=function(nombre){
//         delete this.articulo[nombre];
//     }
//     this.cantidad=function(nombre){
//         return this.articulo[nombre];
//     }

//     this.getNombre=function(nombre){
//         return this.nombre;
//     }
// }

// let tique=new tiquete("tras tunia");
// tique.add('puesto 1',12);
// tique.add('puesto 2',3);
// tique.add('puesto 3',43);
// console.log(tique.cantidad('puesto 1'));


// var libros = new tiquete("Libros");
// var discos = new tiquete("discos");
// var juegos = new tiquete("juegos");
// var comics = new tiquete("comics");

// console.log(libros);
// console.log(discos);
// console.log(juegos);
// console.log(comics);


// function tiquete(nombre){
//     this.nombre=nombre;
//     this.articulos=[];
// };

// tiquete.prototype={
//     add: function(nombre,cantidad){
//         this.articulos[nombre]=cantidad;
//     },
//     borrar: function(nombre,cantidad){
//        delete this.articulos[nombre];
//     },
//     cantidad: function(nombre,cantidad){
//         this.articulos[nombre];
//     },

// }

// var libros = new tiquete("Libros");
// var discos = new tiquete("discos");
// var juegos = new tiquete("juegos");
// var comics = new tiquete("comics");

// console.log(libros);
// console.log(discos);
// console.log(juegos);
// console.log(comics);


class Inventario{
    constructor(nombre){
        this.nombre=nombre;
        this.articulo=[];
    }

    add(nombre,cantidad){
        this.articulo[nombre]=cantidad;
    }
    borrar(nombre){
        delete this.articulo[nombre];
    }

    cantidad(nombre){
        return this.articulo[nombre];
    }
    getNombre(nombre){
        return this.nombre;
    }

}

let libros =new Inventario('Libros');

libros.add("angular",3);
libros.add("javaScript", 23);
libros.add('react', 25);

console.log(libros.cantidad('angular'));
console.log(libros.cantidad('javaScript'));
console.log(libros.cantidad('react'));
console.log(libros.borrar('react'));
console.log(libros.cantidad('react'));




class Vehiculo{
    constructor(tipo,nombre,ruedas){
        this.tipo=tipo;
        this.nombre=nombre;
        this.ruedas=ruedas;
        this.colecion=[];
    }
    getRuedas(){
        return this.ruedas;
    }
    arrancar(){
        console.log(`arrancando el ${this.nombre}`)
    }
    aparcar(){
        console.log(`aparcando el ${this.nombre}`);
    }
    agregar(indice){
        let v={
            'tipo':this.tipo,
            'nombre':this.nombre,
            'ruedas':this.ruedas
            }
        this.colecion[indice]=v;
    }
    getColecion(){
        return console.log(this.colecion);
    }
}

let carro=new Vehiculo('carro','ferrari',4);
carro.agregar(1);
carro.agregar(2);

carro.getColecion();



class Coche extends Vehiculo{
    constructor(nombre){
        super('coche',nombre,4);
    }
}

// let coche1= new Coche('ferrari');
// coche1.arrancar();
// coche1.aparcar();
// console.log(coche1.getRuedas());

export default Coche;