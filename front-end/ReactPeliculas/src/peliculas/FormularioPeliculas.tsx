import { Form, Formik, FormikHelpers } from "formik";
import { creacionPeliculasDTO } from "./Peliculas.model";
import * as yup from "yup"
import Formulario from "./utilidades/Formulario";
import FormularioCheckbox from "./utilidades/FormularioCheckbox";
import FormularioFecha from "./utilidades/FormularioFecha";
import FormularioImagen from "./utilidades/FormularioImagen";
import Boton from "./utilidades/Boton";
import { Link } from "react-router-dom";
import MultipleSelector, { selectorMultipleModel } from "./utilidades/SelectorMultiple";
import { genderListDTO } from "../generos/generos.model";
import { useState } from "react";
import { cineDTO } from "../cines/cine.model";
import TypeAheadActores from "../actores/TypeAheadActores";
import { actorPeliculaDTO } from "../actores/actores.model";

//esto lo hacemos para trabajar con los datos en memoria
export default function FormularioPeliculas(props: formularioPeliculasProps) {
    const [generosSeleccionados, setGenerosSeleccionados] = useState(maping(props.generosSeleccionados))
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(maping(props.generosNoSeleccionados))

    const [cinesSeleccionados, setCinesSeleccionados] = useState(maping(props.cinesSeleccionados));
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(maping(props.cinesNoSeleccionados));

    const [actoresSeleccionados, setActoresSeleccionados] = useState<actorPeliculaDTO[]>(props.actoresElegidos)

    function maping(array: { id: number, nombre: string }[]): selectorMultipleModel[] {
        return array.map(e => {
            return { llave: e.id, valor: e.nombre }
        })
    }

    return (
        <>
            <Formik initialValues={props.modelo}
                onSubmit={(valores, acciones) => {
                    valores.generosIds = generosSeleccionados.map(e => e.llave);
                    props.onSubmit(valores, acciones)
                    valores.cinesIds = cinesSeleccionados.map(x => x.llave);
                    valores.actores = actoresSeleccionados;
                }}

                validationSchema={yup.object(
                    { titulo: yup.string().required("Este campo es requerido").PrimeraLetraMayuscula() }
                )}
            >
                {formikProps => (

                    <Form>
                        <Formulario label="Título" campo="titulo" />
                        <FormularioCheckbox label="En cines" campo="enCines" />
                        <Formulario label="Trailer" campo="trailer" />
                        <FormularioFecha campo="fechaLanzamiento" label="Fecha Lanzamiento" />
                        <FormularioImagen campo="poster" label="Poster" imagenURL={props.modelo.posterURL} />

                        <div className="form-group">
                            <label>Géneros</label>
                            <MultipleSelector seleccionados={generosSeleccionados} noSeleccionados={generosNoSeleccionados}
                                onChange={(seleccionados, noSeleccionados) => {
                                    setGenerosSeleccionados(seleccionados);
                                    setGenerosNoSeleccionados(noSeleccionados);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Cines</label>
                            <MultipleSelector seleccionados={cinesSeleccionados} noSeleccionados={cinesNoSeleccionados}
                                onChange={(seleccionados, noSeleccionados) => {
                                    setCinesSeleccionados(seleccionados);
                                    setCinesNoSeleccionados(noSeleccionados);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <TypeAheadActores

                                onAdd={actores => {
                                    setActoresSeleccionados(actores);

                                }}
                                onRemove={actorRemovido => {
                                    const actores = actoresSeleccionados.filter(x => x !== actorRemovido);
                                    setActoresSeleccionados(actores);
                                }}
                                actores={actoresSeleccionados}
                                listadoUI={(actor: actorPeliculaDTO) =>
                                    <>
                                        {actor.nombre} / <input type="text" placeholder="Personaje"
                                            value={actor.personaje}
                                            onChange={e => {
                                                const indice = actoresSeleccionados.findIndex(x => x.id === actor.id);

                                                const actores = [...actoresSeleccionados];
                                                actores[indice].personaje = e.currentTarget.value;
                                                setActoresSeleccionados(actores);
                                            }}
                                        />
                                    </>}
                            />
                        </div>

                        <Boton disabled={formikProps.isSubmitting} type="submit">Guardar</Boton>
                        <Link className="btn btn-secondary" to="/">Cancelar</Link>

                    </Form>
                )}
            </Formik>
        </>
    )
}

interface formularioPeliculasProps {
    modelo: creacionPeliculasDTO;
    onSubmit(valores: creacionPeliculasDTO, acciones: FormikHelpers<creacionPeliculasDTO>): void;
    generosSeleccionados: genderListDTO[]; //estos son datos temporales
    generosNoSeleccionados: genderListDTO[]; // estos son datos temporales
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actoresElegidos: actorPeliculaDTO[];
}