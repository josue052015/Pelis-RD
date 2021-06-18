import { ReactElement } from "react";

export default function ProyectarContenido2(props: ProyectarContenido2Props){
    return(
<>
<span>parte de arriba de Proyectarcontenido2</span>
{props.partesuperior} 
<br />
<span>parte del medio de Proyectarcontenido2</span>
{props.partemedia} 
<br />
<span>parte de abajo de Proyectarcontenido2</span>
{props.parteinferior}

<hr />
</>
    )
}

interface ProyectarContenido2Props{
    partesuperior: ReactElement;
    partemedia: ReactElement;
    parteinferior:ReactElement;
}


