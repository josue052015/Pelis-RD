import React from "react";
import { Link } from "react-router-dom";

export default function IndiceActores(){
    return(
        <>
        <h1>Indice Actores</h1>
        <Link to = "actores/crear"> Crear Actor</Link>
        </>
    )
}