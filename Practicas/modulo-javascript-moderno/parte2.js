//node .\parte2.js

let apellido = "rodriguez";
const propiedad = "pais";
const valorpropiedad = "RD";
let persona = {
    nombre : "pedro",
    apellido,//aqui podemos poner el nombre de la variable creada anteriormente y se sobreentiende que es apellido: apellido
    sexo: "masculino",
    fechaactual: new Date(),
    //podemos incluso tener funciones aqui
     funcionnormal(){

     },
     funcionflecha: () => {

     },

     //tambien podemos tener propiedades dinamicas, es decir tener propiedades en el objeto a base de otras variables, tanto la propiedad como el valor vienen de dos variables
     [propiedad]: valorpropiedad
};

console.log (persona);

//como obtener el valor de un objeto

console.log(persona["pais"]);

//.................................DESTRUCTURACION.........................................
//es obtener los datos de un objeto y en este caso lo haremos en una misma linea. Ej:
let estudiante = 
{
    nombre: "pedro",
    edad: 19,

    curso: "primero"
};
//antes se hacia asi: const nombre = estudiante.nombre; y eso esta bien, pero no es eficiente ya que tienes que hacerlo uno por uno
const {nombre,edad,curso} = estudiante;
console.log(nombre);
console.log(edad);
console.log(curso);

//vamos a obtener datos de un objeto a traves de una funcion
obtenerdireccion = () => {
    return {
        apodopersona: "pepito",
        direccion: "cancino"
    };
}
const {apodopersona,direccion} = obtenerdireccion();
console.log(apodopersona);
console.log(direccion);

//vamos a destructurar parametros de una funcion 

imprimirnombre = (persona) =>{
console.log(persona.nombre);
}

imprimirnombre(persona);
//si queremos destructurar cualquier propiedad que se llame nombre sin importar el objeto:
imprimirtodonombre = ({nombre}) =>{
    console.log(nombre);
}

imprimirtodonombre(persona);

//vamos a destructurar arreglos

const arreglo = [1,2,3,4]
//antes se hacia: const primero = arreglo[0]; pero no es eficiente

const [primero,segundo,,cuarto] = arreglo;//la ,, se utiliza para omitir un lugar del arreglo pero es solo cuando esta entre []
console.log(primero);
console.log(segundo);
console.log(cuarto);

//vamos a destructurar una funcion que retorne un arreglo
funcionarreglo = () =>{
    return["hola","como estas"]
}

const [valor1,valor2] = funcionarreglo();

console.log(valor1);
console.log(valor2);
