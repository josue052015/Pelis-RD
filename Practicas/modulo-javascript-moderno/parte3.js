//node .\parte3.js
//.................operador spread.....................
//con este "..." podemos descomponer un arreglo o objeto para trabajar con c/u de sus partes
const sumar = (a,b) => a+b;

let numeros = [2,3]

const suma = sumar(...numeros); //con esos 3 puntos podemos pasarle esos valores del arreglo ejecutando la funcion sumar

console.log(suma);

// vamos a crear un arreglo a base de otro ó con los datos de otro

let numeros2 = [1,...numeros,4,5];//los ... permiten utilizar los datos del arreglo anterior
console.log(numeros2);

// concatenar dos arreglos

let concatenacion = [...numeros,...numeros2];
console.log(concatenacion);

//operador spread con destructuacion, lo que hace esto es que con destructuracion sacamos el primer elemento del arreglo y lo imprimimos y luego con spreach le pasamos los elementos restantes y lo imprimimos despues
const [primero,...resto] = numeros2;
console.log("primer valor",primero);
console.log("resto",resto);


//vamos a crear un arreglo completamente a base de otro (clonado)

let saludo = ["hola", "como estas"];
let saludo2= [...saludo];

console.log(saludo2);

//vamos a usar el operador spread con objetos
const estudiantes = {
    nombre: "pepe",
    apellido: "lopez"
};

const estudiantes2 = {
    ...estudiantes,
    edad:90
}

console.log(estudiantes2);

//clonar objetos
const estudiantes3 = {...estudiantes2}
estudiantes3.nombre = "ramon"; //podemos incluso cambiarle propiedades
console.log(estudiantes3);

//destructuracion y spread con objetos

const {edad,...estudiantes4} = estudiantes3;
console.log ("la edad",edad);
console.log("lo demas",estudiantes4);

//...................................CLASES....................................................
class areatriangulo{
constructor(base,altura){//un constructor es una funcion que se ejecuta inmediatamente cuando instancias la clase
this.base = base;
this.altura = altura;
}
area(){
    console.log(`el resultado es ${this.base * this.altura}`); // esta es una funcion dentro de la clase
}

}
const resultado = new areatriangulo(3,4);//aqui instanciamos la clase y le pasamos los parametros a calcular
resultado.area();//aqui ejecutamos la funcion que nos muestra el resultado

//ejemplo por mi

class suma2{
    constructor(num1,num2){
this.num1 = num1;
this.num2 = num2;
    }

    resultado(){
      console.log(`el resultado de la suma es ${this.num1 + this.num2}`);
            }

            funcionheredada(){//esta la utilizaremos para que sea heredada en el proximo ejemplo
                console.log(`la clase fue heredada con exito`);
                      }
            
}

const ejecutar = new suma2(2,2);
ejecutar.resultado();

//vamos a hacer una clase heredada

class sumaheredada extends suma2{ //la gracia de esto es que puedas heredar cualquier funcion de la clase principal

}

const vamosaheredar = new sumaheredada();
vamosaheredar.funcionheredada();

//podemos editar las funciones al momento de ser heredadas
const vamosaheredar2 = new sumaheredada();
vamosaheredar2.funcionheredada = function(){  //cuando hacemos esto tenemos que invocarla de nuevo
    console.log("editado");
}
vamosaheredar2.funcionheredada();

//funcion estatica

//estas son aquellas las cuales no dependen de una instancia de clase para ser invocadas. Ej:
class nombreclase {
   static nombrefuncion(){
        console.log("saludos");
    }
}
//vamos a invocar la funcion sin instanciar la clase
nombreclase.nombrefuncion();

//........................FUNCION MAP.................................
//la funcion map es una que nos permite crear un arreglo a base de otro pero aplicando un algoritmo en cada uno de sus elementos
const numerosmap = [1,2,3,4,5]
const doble = numerosmap.map((valor)=>valor*2);
console.log("numeros",numerosmap);
console.log("doble",doble);

//vamos a extraer valores de una arreglo con objetos
const arregloobjeto = [
    {id:1,color1:"rojo",color2: "verde"},
    {id:2,color1:"gris",color2: "morado"},
    {id:3,color1:"azul",color2: "amarillo"}
];
//vamos a obtener todos los id de este arreglo
const ids = arregloobjeto.map(arregloobjeto => arregloobjeto.id);
console.log("los ids son: ",ids);

//vamos a retornar varios valores

const colores = arregloobjeto.map(arregloobjeto => {
    return{
        color1:arregloobjeto.color1,
        color2:arregloobjeto.color2}
});

console.log("colores", colores);

//con map podemos crear codigo html

const codigohtml = arregloobjeto.map(arregloobjeto => `
<div>
<span> ${arregloobjeto.color1}</span>
</div>
`);
console.log(codigohtml);
//otro ejemplo
const codigohtml2 = colores.map(colores => `
<div>
<span> ${colores.color1}</span>
</div>
`);
console.log(codigohtml2);
