import { Form, Formik, FormikHelpers } from "formik";
import { creacionCinesDTO } from "./cine.model";
import * as yup from "yup"
import Formulario from "../peliculas/utilidades/Formulario";
import Boton from "../peliculas/utilidades/Boton";
import { Link } from "react-router-dom";
import Mapa from "../peliculas/utilidades/Mapa";
import FormularioMapa from "../peliculas/utilidades/FormularioMapa";
import { coordenadaDTO } from "../peliculas/utilidades/coordenada.model";

export default function FormularioCine(props: formularioCineProps) {

    function transformarCoordenadas(): coordenadaDTO[] | undefined { //esto lo que hace es que si hay coordenadas dispobibles me las mostrara en el mapa, sino sera undefined
    if(props.modelo.latitud && props.modelo.longitud){
     const respuesta: coordenadaDTO = {latitud: props.modelo.latitud, longitud: props.modelo.longitud}
     return[respuesta]
    }
    return undefined;
    }

    return (
        <>
            <Formik initialValues={props.modelo} onSubmit={props.onSubmit}
                validationSchema={yup.object({
                    nombre: yup.string().required("Este campo es requerido").PrimeraLetraMayuscula()
                })} >

                {(formikProps) => (
                    <Form>
                        <Formulario label="Nombre" campo="nombre" />

                        <div style = {{marginBottom: "1rem"}}>
                             <FormularioMapa campoLatitud = "latitud" campoLongitud="longitud" coordenadas = {transformarCoordenadas()} /> 
                        </div> 

                        <Boton disabled={formikProps.isSubmitting} type="submit">Guardar</Boton>
                        <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface formularioCineProps {
    modelo: creacionCinesDTO;
    onSubmit(valores: creacionCinesDTO, acciones: FormikHelpers<creacionCinesDTO>): void
}