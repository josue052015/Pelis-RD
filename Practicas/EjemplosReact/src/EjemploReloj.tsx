import { useState, useEffect } from "react";

export default function EjemploReloj(){

    const [fecha, setfecha] = useState(new Date()); //el estado son elementos que pertenecen a un componente pero que al editarlos seran renderizados

    useEffect(() => { //el useeffect  añade un efecto que se ejecutará cada vez que nuestro componente se renderice.
    
    const timer = setInterval(() => {
      setfecha(new Date()); //aqui lo que esta haciendo es que está invocando a la funcion set fecha "[fecha, setfecha]" una vez por segundo
    }, 1000); 
    
    return() => clearInterval(timer); //tenemos que limpiar este componente para no general memory list
    })

    return(//el return es lo que se renderiza en la pantalla
        <div >
     <h3>Ejemplo React</h3>
      <input />
      <div> {fecha.toString()}</div>
    </div>
    )
}
