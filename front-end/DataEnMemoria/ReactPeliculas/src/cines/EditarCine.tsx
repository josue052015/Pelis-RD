import React from "react";
import FormularioCine from "./FormularioCine";

export default function EditarCine(){
    return(
        <>
        <h1>Editar cine</h1>
        <FormularioCine modelo = {{nombre:"Agora mall", latitud:18.509086 , longitud: -69.852084}} 
        onSubmit = {e => console.log(e)}
        />
        </>
        
    )
}