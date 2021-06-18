import React from "react";
import FormularioActores from "./FormularioActores";

export default function EditarActores(){
    return(
        <>
         <h1>Editar Actor</h1>
        <FormularioActores modelo={{ nombre: "Actor por defecto", fechaNacimiento: new Date ("1996-06-01T00:00:00"), 
         biografia: ` # Calvo de brazzers 
 **Sus profesiones son:** `,
           fotoURL: "http://pm1.narvii.com/6120/9cd70762280f430ded8158c06c287e82b84d0101_00.jpg"
           }}
        onSubmit={e => console.log(e)}
    />
        </>
    )
}