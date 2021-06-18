//let y const sirven para declarar variables y constantes
//las constantes se pueden modificar unicamente el valor de una propiedad de una variable
//comando para ejecutar la consola: node .\parte1.js 

const persona = {
    nombre: 'pedro',
    apellido: 'ramirez'
}

persona.nombre = 'josue';

console.log(persona);
//puedes guardar funciones dentro de un let
//tarea: mostrar  el valor de retorno de esta funcion en la consola
let mifuncion = function duplicar (numero)
{
    return numero * 2;
 
}

//................................funciones flecha........................................
let duplicar = (numero) => {
return numero * 2;
}
/*si solo vas a retornar un solo valor no necesitas ponerle llaves ni return porque en ese caso ya hay un return 
 implicito y si solo vas a ponerle un solo parametro no necesitas parentesis 
 OJO: solo en esos  y solo en funciones flecha*/

 let duplicar2 = numero =>  numero * 2;

 //en este caso se usa un parentesis porque hay 2 parametros
 let sumar = (num1, num2) => num1 + num2;
 //funcion flecha sin parametro

 let sinparametro = () => console.log('klk');

 //.......................................THIS.................................................

 //el this te permite entrar al contexto del codigo actual o hacer una referencia a un objeto
 /*hay 2 tipos de this: uno que se utiliza en funcion nomrmal y otro que se utiliza en funcion flecha, la diferencia
 esta en el que el this de la funcion normal es el valor del objeto que hizo la invocacion a la funcion.
 El this de la funcion flecha depende del lugar donde la funcion fue definida(el ambiente)*/

 //Cuando se usa this en una función que no es llamada por ningún objeto, equivale al objeto global window.

function hacerAlgo() {
    console.log(this); // window
}
//Cuando hacemos uso de this dentro de una función que existe dentro de una clase u objeto, hace referencia a la clase u objeto mismo.

function Persona() {
    this.edad = 22; // this = Persona
}

var Persona = {
    calcAge: function() {
        console.log(this); // this = Persona
    }
}

/*prueba del this normal y de flecha*/

const obj = {
funcionnormal: function() {
    console.log('funcion normal',this);
},
funcionflecha: () => {
    console.log('funcion flecha',this);
}

}
console.log('this del ambiente',this);
obj.funcionnormal();
obj.funcionflecha();

/*EJEMPLO PRACTICO DEL THIS*/

var personas = {
    edad : 25,  //valor a evaluar
    esMayor : function() {
        console.log("evaluando esMayor() , this de referencia =" + this + " edad=" + this.edad);
        return this.edad >= 18; //aqui tenemos una decision que evalua si es mayor o igual a 18
        //como ya sabemos un if retorna true o false y eso es lo que mostraremos en el console log aparte de la edad y el this de referencia
    }
}

console.log(personas.esMayor());
personas.edad = 17; //aqui cambiamos el valor a evaluar
console.log(personas.esMayor());

//..............................PLANTILLAS LITERALES........................................

//esto se utiliza para declarar cadenas de caracteres pero de forma mas sencilla
//EJ: 
const señor = "pedro";
//una forma antigua de concatenar esa variable seria:
const saludo = "hola " + señor + " cómo esta";
console.log(saludo);

//pero usando las plantillas literales las cuales son estas comillas `` puedes concatenar de mejor forma

const saludo2 = `hola ${señor} cómo esta`;
console.log(saludo2);

//puedes incluso hacer saltos de linea  y hasta evaluar funciones dentro de esta plantilla literal
let suma2= (a,b) => a+b;
const mensaje = `hola ${señor},

digame a ver
la suma de 1 y 2 es ${suma2(1,2)}
`;
console.log(mensaje);
//NOTA: esto ${} se llama string interpolation

//...............................OPERADOR TERNARIO.....................................................
//esto se utiliza para hacer una condicion sin necesidad de un if/else

let edad = 17;
let resultado= (edad >= 18) ? "puedes pasar" : "no puedes pasar";
//el parentesis es para la condicion, el ? es para el caso de true y el : es para el caso de false
console.log(resultado);