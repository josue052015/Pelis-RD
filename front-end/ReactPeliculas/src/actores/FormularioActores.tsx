import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Boton from "../peliculas/utilidades/Boton";
import Formulario from "../peliculas/utilidades/Formulario";
import { actoresCreacionDTO } from "./actores.model";
import * as yup from "yup"
import FormularioFecha from "../peliculas/utilidades/FormularioFecha";
import FormularioImagen from "../peliculas/utilidades/FormularioImagen";
import FormularioMarkDown from "../peliculas/utilidades/FormularioMarkDown";

export default function FormularioActores(props: FormularioActoresProps) {
    return (
        <>
        
            <Formik initialValues={props.modelo}
                onSubmit={props.onSubmit}
                validationSchema={yup.object({
                    nombre: yup.string().required("Este campo es requerido").PrimeraLetraMayuscula(),
                    fechaNacimiento: yup.date().nullable().required("La fecha es requerida")
                })
                } >
                {(formikProps) => (
                    <Form>
                        <Formulario campo="nombre" label="nombre" />
                        <FormularioFecha label="Fecha de nacimiento" campo="fechaNacimiento" />
                        <FormularioImagen campo="foto" label="Foto" imagenURL={props.modelo.fotoURL} />
                        <FormularioMarkDown campo = "biografia" label = "Biografía" />

                        <Boton disabled={formikProps.isSubmitting} type="submit" >
                            Guardar
                        </Boton>
                        <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface FormularioActoresProps {
    modelo: actoresCreacionDTO;
    onSubmit(valores: actoresCreacionDTO, acciones: FormikHelpers<actoresCreacionDTO>): void;
}