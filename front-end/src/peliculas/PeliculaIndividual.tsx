  import { pelicula } from "./Peliculas.model";  
import css from "./pelicula-individual.module.css"

export default function PeliculaIndividual(props: PeliculaIndividualProps){
const construirlink = () => `/pelicula/${props.pelicula.id}`

    return(
<>
<div className = {css.div}>
    <a href= {construirlink()}>
        <img src={props.pelicula.poster} alt="" />
    </a>
    <p>
        <a href={construirlink()}>{props.pelicula.titulo}</a>
    </p>
</div>
</>
    )
}

interface PeliculaIndividualProps{
    pelicula: pelicula;
}
