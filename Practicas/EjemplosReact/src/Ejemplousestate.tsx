import React, { useEffect, useState } from 'react';
import ComponenteTexto from './ComponenteTexto';

export default function Ejemplousestate(){
    const [texto,setTexto] = useState('Valor por defecto') //usar todas las variables en const te sirve como recordatorio para no actualizar sin el setTexto

    const [chequeado,setChequeado] = useState(false)

    const verpalabrasconstate = (e:React.KeyboardEvent<HTMLInputElement>) =>{
        setTexto(e.currentTarget.value);
      }
    return(
<>
<hr />
<h1>Ejemplo use state</h1>
{/*Vamos a mostrar el texto del div en otro componente */}
<ComponenteTexto texto = {texto}/> {/*este es practicamente el div que nos mostrara el texto renderizado. texto es la propiedad de la interfaz que creamos en el otro componente y el texto entre llaves es el del usestate de arriba*/}

<br />
{/*renderizar texto con state */}
<input type="text" 
onKeyUp = {(e) => verpalabrasconstate(e)}
/>

<input
    onChange = {(e) =>setChequeado(e.currentTarget.checked)}
    checked = {chequeado}
    type="checkbox" /> selecciona {/*para agregarle un valor por default tienes que utilizar una expresion (es esto: {}). Por ejemplo: "    <input type="checkbox" checked= {true}/> " y si quieres que el cambio se visualice, tienes que trabajar con el estado del componente */}
  
</>
    )
}