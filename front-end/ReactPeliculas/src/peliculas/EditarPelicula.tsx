import React from "react";
import { actorPeliculaDTO } from "../actores/actores.model";
import { cineDTO } from "../cines/cine.model";
import { genderListDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPelicula() {
    const generosSeleccionados: genderListDTO[] = [{ id: 1, nombre: "Acción" }]
    const generosNoSeleccionados: genderListDTO[] = [{ id: 2, nombre: "Comedia" }, { id: 3, nombre: "Drama" }]

    const cinesSeleccionados: cineDTO[] = [{ id: 1, nombre: "Galeria 360" }]
    const cinesNoSeleccionados: cineDTO[] = [{ id: 2, nombre: "Agora" }, { id: 3, nombre: "Sambil" }]

    const actoresSeleccionados: actorPeliculaDTO[] = [{
        id: 1, nombre: "Calvo de brazzers", personaje: "",
        foto: "http://pm1.narvii.com/6120/9cd70762280f430ded8158c06c287e82b84d0101_00.jpg"
    }]

    return (
        <>
            <h1>Editar película </h1>
            <FormularioPeliculas
            actoresElegidos = {actoresSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                modelo={{ titulo: "Iron Man", enCines: true, trailer: "url", fechaLanzamiento: new Date("2019-01-01T00:00:00") }}
                onSubmit={value => console.log(value)}
            />
        </>

    )
}
