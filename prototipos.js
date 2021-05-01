//clases prototipales con herencia 
function heredar(hijo,padre){

    let noop=function(){}
    noop.prototype=padre.prototype
    hijo.prototype=new noop()
    hijo.prototype.constructor=hijo
}


function Personas(nombre,apellido,edad,lenguaje){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
    this.lenguaje=lenguaje
}

Personas.prototype.saludar=function(){
    console.log(`hola campeon ${this.nombre} eres lo maximo`);
}
Personas.prototype.restarEdad=function(){
    let valor=this.edad-3;
    console.log(valor);
}
Personas.prototype.leguajeFavorito=function(){
    console.log(` desde  barcelona ${this.lenguaje}`);
}


function Developer(nombre,apellido,edad,lenguaje){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
    this.lenguaje=lenguaje
}

//invoco en este lugar para no sobreescribir los metodos propios.
heredar(Developer,Personas)



Developer.prototype.lenguajeFavorito=function(){
    console.log(` desde filipinas${this.lenguaje}`);
}
Developer.prototype.saludar=function(){
    console.log(`hola developer ${this.nombre} eres el mejor desarrollador`);
}




let julian=new Personas('julian','calambas',12,'python');
let desarrollo=new Developer('camilo','quintero',40,'javaScript');

// desarrollo.saludar();
// julian.restarEdad();

