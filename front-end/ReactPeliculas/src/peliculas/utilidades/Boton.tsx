import { type } from "os";
import { ReactElement } from "react";

export default function Boton(Props: BotonProps){
    return(
        <>
        <button type = {Props.type} className = {Props.className}
        disabled = {Props.disabled}
        onClick ={Props.onClick} 
        >{Props.children}</button>
        </>
    )
}
interface BotonProps{
    children: React.ReactNode,//esto es para simplicar y no tener que poner <></>
    onClick?(): void;       // () significa que no va a tener parametros en especificos y void significa que no va a retornar nada 
    type: "button" | "submit";   //basicamente con el onClick le vamos a pasar una funcion para que haga algo 
    disabled: boolean;
    className: string;
}                                  

Boton.defaultProps = {
type: "button",
disabled: true,
className: "btn btn-primary"
}