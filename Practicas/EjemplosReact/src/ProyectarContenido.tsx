import { ReactElement } from "react";

export default function ProyectarContenido(props: ProyectarContenidoProps){
return(
<>
<h3>arriba</h3>

{props.children /*Esto es basicamente lo que le pasaremos en el otro componentes*/} 

<h3>abajo</h3>
</>
)

}

interface ProyectarContenidoProps{
children: ReactElement
}