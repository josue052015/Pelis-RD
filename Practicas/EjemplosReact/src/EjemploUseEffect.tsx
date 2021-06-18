import { useEffect, useState } from "react"

export default function EjemploUseEffect(){
  const[click,setclick] = useState(0)
  const[fecha, setFecha] = useState(new Date())

    useEffect(() => {console.log("ha cargado el useeffect");
    document.title = `${click} veces`

    return() => { //este return de aqui es cuando vamos a limpiar el contenido del componente
        alert("el componente se destruira en 3...2...1...");
    }
}, [click]) //con "[click]" lo que hicimos fue que le pusimos una dependencia que establece que unicamente cuando el valor de la variable cambie es que se ejecutara el useEffect

/*.............................useEfect para un contador de fecha.....................*/
useEffect(() => {
  const valorfecha = setInterval(() => {
setFecha (new Date())
  },1000)

  return () => clearInterval(valorfecha);
})

/*............................useEffect que se ejecuta 1 sola vez............................*/
useEffect(() => {
    console.log("me ejecute")
    },[])//poniendole una dependencia vacia solo se ejecutara una vez ya que nunca habrán mas cambios en esa dependencia 

    return(
        <>
        <div>
        {fecha.toString()}
        </div>
        <br />
        <span>Ejemplo del useeffect: me presionaste {click} veces</span> <br />

        <button onClick = {() => setclick(click+1) } >Presionameee</button>


</>
    )
} 