
// import Coche from './example.js';
class Person{
    constructor(name,surname,phone,email,age,country,id){
        this.name=name;
        this.surname=surname;
        this.phone=phone;
        this.email=email;
        this.age=age;
        this.country=country;
        this.id=id;
        this.data=[];
    }
    getValores(){
        let datos=`Estos son mis datos nombre :${this.name} apellido: ${this.surname}
        telefono ${this.phone} email: ${this.email} age: ${this.age} pais: ${this.country}
        identificacion ${this.id}`;

        return datos;
    }

    setBackup(){
        let datos={
            "name":this.name,
            "surname":this.surname,
            "phone":this.phone,
            "email":this.email,
            "age":this.age,
            "country":this.country,
            "identificacion":this.id
        }
        this.data.push(datos);
    }
    getData(){
        return this.data;
    }
}

// let personOne=new Person('julian','calambas','3135877553','juancaor1997@gmail.com','23','colombia','1060806072');

// personOne.setBackup();
// console.log(personOne.getData());

class Lawyer extends Person{
    constructor(especialidad){
        super('julian','calambas','3135877553','juancaor1997@gmail.com','23','colombia','1060806072');
        this.especialidad=especialidad;
    }

    complemento(){
        let valor=`${this.getValores()} y esta es mi prfesion ${this.especialidad}`;
        return valor;

    }
}

let lawyer=new Lawyer('abogado penal');

console.log(lawyer.complemento());





