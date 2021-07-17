import { cineDTO } from "../cines/cine.model";
import { listadogenerosDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPelicula(){
    const generos: listadogenerosDTO[] = [{id: 1, nombre: "Acción"},{id: 2, nombre: "Comedia"},{id: 3, nombre: "Drama"}]

    const cines: cineDTO[] = [{id: 1, nombre: "Galeria 360"},{id: 2, nombre: "Agora"},{id: 3, nombre: "Sambil"}]
    return(
        <>
        <h1>Crear película </h1>
        <FormularioPeliculas 
        actoresElegidos = {[]}
        cinesNoSeleccionados = {cines}
        cinesSeleccionados = {[]}
        generosNoSeleccionados = {generos}
        generosSeleccionados ={[]}//lo dejamos como un arreglo vacio ya que se supone que estamos creando y no deberian de haber seleccionados
        modelo = {{titulo:"",enCines: false,trailer:""}} 
        onSubmit = {value => console.log(value)}
        />
        </>
    )
}