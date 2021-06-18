export default function EjemploFuncionParametros(){
     {/*funcion con parametros */}

  const tecleo = (e:React.KeyboardEvent<HTMLInputElement>) => {//se sabe que en jsx tienes que ponerle el tipo de dato a los parametros cuando los declaras. pero como supe este tipo de dato? vas abajo donde pusiste ese parametro por primera vez, pones el cursor arriba y copias ese tipo de dato
    alert(e.currentTarget.value); // el "currentTarget.value" es para mostrar el dato que se está tecleando
    
      }
    return(
    <>
    {/*funcion con parametros */}
<input type="text" 
onKeyUp = {(e) => tecleo(e)}
/>
<br />
    </>
    )
}