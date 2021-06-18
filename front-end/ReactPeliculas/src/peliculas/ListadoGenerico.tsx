import { ReactElement } from "react";
import Cargando from "./utilidades/Cargando";

export default function ListadoGenerico(props:ListadoGenericoProps){
    if(!props.listado){
       if(props.cargandoUI){
           return props.cargandoUI;
       }
       return <Cargando/>
    } else if (props.listado.length === 0){
        if(props.listadoVacioUI){
            return props.listadoVacioUI;
        }
        return <>No hay elementos para mostrar</>
    } else{
        return props.children;
    }

    }
interface ListadoGenericoProps{
    listado: any; //recibe un listado de lo que sea
    children: ReactElement; //esto recibe lo que queremos mostrar si hay elementos
    cargandoUI?: ReactElement; //esto recibe el loading
    listadoVacioUI?: ReactElement; // esto lo mostraremos si no hay nada en el listado

}