import { Field, Form, Formik, FormikProps } from "formik";
import { listadogenerosDTO } from "../generos/generos.model";

export default function FiltroPeliculas() {
    const valorInicial: FiltroPeliculasForm = {
        titulo: "",
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }
    //esto lo hacemos porque todavia no tenemos una base de datos
    const generosL: listadogenerosDTO[] = [
        { id: 1, nombre: "Accion" },
        { id: 2, nombre: "Aventura" }
    ]

    return (
        <>
            <h1>Filtrar película </h1>
            <Formik initialValues={valorInicial}
                onSubmit={e => console.log(e)} >
                {/* el valorInicial representa el valor inicial del formulario(default) */}
                {(FormikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="titulo" className="sr-only">Título</label>
                                <input type="text"
                                    className="form-control" id="titulo"
                                    placeholder="titulo de la pelicula"
                                    {...FormikProps.getFieldProps("titulo")/*el getfieldprops es para hacer que el formik nos acepte el input, ya que esto hace que se actualice el valor del formulario */}
                                />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <select className="form-control"
                                    {...FormikProps.getFieldProps("generoId")}
                                >
                                    <option value="0">--Seleccione un género--</option>
                                    {generosL.map(e => <option key={e.id} value={e.id}>{e.nombre}</option>)}
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="proximosEstrenos" name="proximosEstrenos" type="checkbox" />
                                <label className="form-check-label" htmlFor="proximosEstrenos">Próximos estrenos</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="enCines" name="enCines" type="checkbox" />
                                <label className="form-check-label" htmlFor="enCines">En cines</label>
                            </div>
                            <button className ="btn btn-primary mb-2 mx-sm-3"
                              onClick = {() => FormikProps.submitForm()/*el submitForm es para establecer que el formulario se enviara solo cuando suceda ese onclick */} 
                               >OK
                            </button>
                            <button className = "btn btn-danger mb-2" onClick = {() => FormikProps.setValues(valorInicial)/*setvalue lo que hace es que cambia los valores del formulario, lo usamos como es un boton de limpiar queremos que se cambien todos los valores al valor inicial osea nada*/}
                            > Limpiar
                            </button>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface FiltroPeliculasForm {
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}