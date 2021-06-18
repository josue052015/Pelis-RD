const naranja = [1,2,3,4,5]

const naranjapintada = naranja.map((naranja)=>naranja*2);

console.log("naranjas originales", naranja);
console.log("naranjas doble",naranjapintada);

const sujeto = [
    {nombre:"sujeto1",color1:"rojo",color2: "verde"},
    {nombre:"sujeto2",color1:"gris",color2: "morado"},
    {nombre:"sujeto3",color1:"azul",color2: "amarillo"}
];
//vamos a obtener todos los id de este arreglo
const sujetoNombres = sujeto.map(arregloobjeto => arregloobjeto.nombre);
console.log("los nombres son: ", sujetoNombres);