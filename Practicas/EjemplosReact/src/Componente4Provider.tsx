import { useContext } from "react"
import ValorContext from "./ValorContext"
export default function Componente4Provider(){

    const valor = useContext(ValorContext)

    return(
        <>
        <h3>El componente 4: el valor del context es: {valor} </h3>
        </>
    )
}