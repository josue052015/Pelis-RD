export default function ImputComponente(props:InputComponenteProps){
    return(
        <>
        <input type="text" 
onKeyUp = {(e) => props.tecleo(e.currentTarget.value)}//con esto majamos cualquier funcion que nos pase el componente padre
/>
<br />
        </>
    )
}
interface InputComponenteProps{
tecleo(texto: string): void
}

/*
lo que hicimos:

1-creamos el input en este componente.
2-creamos la asignatura de la funcion que es el nombre de la funcion con los parametros (le pusimos void ya que no tenia parametro de salida)
3-establecimos la funcion tecleo en el componente que lo que hace es que tira un alert con el valor del parametro
4-hicimos la representacion de inputcomponente en el return del componente padre y la propiedad tecleo invoca a la funcion tecleo.
*/

