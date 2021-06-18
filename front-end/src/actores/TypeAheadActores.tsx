import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown";
import { actorPeliculaDTO } from "./actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps) {
    const opcionActor: actorPeliculaDTO[] = [{
        id: 1, nombre: "Calvo de brazzers", personaje: "", foto: "http://pm1.narvii.com/6120/9cd70762280f430ded8158c06c287e82b84d0101_00.jpg"
    },
    {
        id: 2, nombre: "Keanu Reeves", personaje: "", foto: "https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UY317_CR19,0,214,317_AL_.jpg"
    },

    {
        id: 3, nombre: "Camilo Perez", personaje: "", foto: "https://m.media-amazon.com/images/M/MV5BMTc0NjczNDc1MV5BMl5BanBnXkFtZTYwMDU0Mjg1._V1_UX214_CR0,0,214,317_AL_.jpg"
    }
    ]

    const seleccionado: actorPeliculaDTO[] = []

    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO | undefined>(undefined);

    function manejarDragStart(actor: actorPeliculaDTO) {
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO) {
        if (!elementoArrastrado) { //esto lo que hace es que si no tenemos ningun elemento que no retorne nada para que no de error
            return;
        }

        if (actor.id !== elementoArrastrado.id){
            //para reorganizar la lista al arrastrar el elemento tenemos que hacer una combinacion entre el elemento arrastrado y los demas
            //y para eso le sacamos el indice a cada uno
            const elementoArrastradoIndice = props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const otrosElementosIndice = props.actores.findIndex (x => x.id === actor.id );
            //ahora haremos el intercambio
            const actoresArreglo = [...props.actores]; //aqui estamos almacenando todos los elementos
            //aqui le decimos que donde estaba el otro elemento que ponga al elemento arrastrado
            actoresArreglo [otrosElementosIndice] = elementoArrastrado;
            actoresArreglo[elementoArrastradoIndice] = actor;
           /*  imaginemos que tenemos: 
            arreglo[0] = pedro 
            arreglo [1] = juan 

            con los indices le estamos diciendo que ponga a juan en el indice de pedro y a pedro en el indice donde estaba juan
            y seria
            arreglo[0]= juan
            arreglo[1] = pedro */
            props.onAdd(actoresArreglo);
        }
    }

    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actores => {

                    if (props.actores.findIndex(x => x.id === actores[0].id) === -1) {
                        //este if para evaluar si no se encuentra seleccionado aun 
                        props.onAdd([...props.actores, actores[0]]);

                        //aqui estamos juntando los actores seleccionados con lo que ya estan
                    }


                }}
                options={opcionActor} // esto es para llenar el typeahead
                labelKey={actor => actor.nombre} //este es el valor que queremos utilizar para mostrar
                filterBy={["nombre"]}
                placeholder="Escriba el nombre del actor..."
                minLength={1}//es la longitud minima que hay que escribir para que aparezca
                flip={true} //esto es para que la lista se coloque arriba
                selected={seleccionado}
                renderMenuItemChildren={e => ( //esto es para modificar lo que va a aparecer en la lista de recomendaciones
                    <>
                        <img src={e.foto} alt="imagen actor"
                            style={{ height: "64px", marginRight: "10px", width: "64px" }}
                        />
                        <span> {e.nombre} </span>
                    </>
                )}
            />
            <ul className="list-group">
                {props.actores.map(actor => <li
                    draggable={true} //esto hace que los elementos del listado sean arrastrables
                    onDragStart={() => manejarDragStart(actor)} //es cuando empecemos a arrastrar un elemento
                    onDragOver={() => manejarDragOver(actor)} //es cuando le pasemos por encima a un elemento mientras arrastremos
                    key={actor.id} className="list-group-item list-group-item-action"
                >
                    {props.listadoUI(actor)}
                    <span className="badge badge-primary badge-pill pointer"
                        style={{ marginLeft: "0.5rem" }}
                        onClick={() => props.onRemove(actor)}
                    >
                        X
                    </span>
                </li>)}
            </ul>
        </>
    )
}

interface typeAheadActoresProps {
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void; //esto lo hacemos para atravez del props modificar el lo que contiene el dto
    listadoUI(actor: actorPeliculaDTO): ReactElement; //esto lo hacemos para que el ui de la lista venga como un parametro
    onRemove(actor: actorPeliculaDTO): void;
}