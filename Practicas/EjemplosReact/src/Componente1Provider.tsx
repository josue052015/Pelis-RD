import { useContext } from "react"
import ValorContext from "./ValorContext"
import Componente3Provider from "./Componente3Provider"
import Componente4Provider from "./Componente4Provider"
export default function Componente1Provider(){

    const valor = useContext(ValorContext)

    return(
        <>
        <h3>El componente 1: el valor del context es: {valor} </h3>
<Componente3Provider/>
<Componente4Provider/>
        </>
    )
}