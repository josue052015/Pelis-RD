import { pelicula } from "./Peliculas.model";
import PeliculaIndividual from './PeliculaIndividual';
import css from "./ListadoPeliculas.module.css"  
import Cargando from "./utilidades/Cargando";
import ListadoGenerico from "./ListadoGenerico";


export default function ListadoPeliculas(props:ListadoPeliculasProps){

    return(

        <ListadoGenerico listado={props.pelicula}> 
        {/* el listado generico gestiona los parametros de listado. Lo que está dentro de esto pertenece al children */}

        <div className = {css.div} >
        {props.pelicula?.map( // con esto estamos conviertiendo el arreglo de peliculas en peliculas individuales que utiliza el componente "peliculaindividual" que despliega cada pelicula de manera individual
                            e => <PeliculaIndividual pelicula = {e} //despliegue de peliculas
                                  key = {e.id} /> 
                                  //el key es necesario porque tenemos un listado y hay que identificar a cada elemento                                    
        )} 
        </div> 

{/* Esto es si quieres hacer el despliegue de peliculas llamado "pelicula individual" aqui:

import css   from "./pelicula-individual.module.css"

<>
<div className = {css.div} >
        {props.pelicula?.map( x => <div className = {css.div}>
    <a >
        <img src={x.poster} alt="" />
    </a>
    <p>
        <a>{x.titulo}</a>
    </p>
</div> )} 
        </div>
</> */}
        </ListadoGenerico>
      
        )

}

interface ListadoPeliculasProps{
pelicula?: pelicula[]
}