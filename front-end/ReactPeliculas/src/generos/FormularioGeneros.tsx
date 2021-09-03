import * as yup from "yup"
import { Formik, Field, Form, ErrorMessage, FormikProps, FormikHelpers } from "formik";
import Formulario from "../peliculas/utilidades/Formulario";
import Boton from "../peliculas/utilidades/Boton";
import { Link } from "react-router-dom";
import { genderDTO } from "./generos.model";

export default function FormularioGeneros(props: formularioGenerosProps) {
  return (
    <>
      <Formik initialValues={props.model}

        onSubmit={props.onSubmit}

        validationSchema={yup.object({
          nombre: yup.string().required("Este campo es requerido") .PrimeraLetraMayuscula()
          .max(50,"La longitud maxima es de 50 carateres")
        })}
      >
        {/* el onsubmit significa qué hara cuando suceda el summit del formulario nota: esta nota me dio un error del diache por ponerlo al lado del formik*/}

        {(FormikProps) => (
          <Form>
            <Formulario campo="nombre" label="Nombre" placeholder="Nombre del género" />

            <Boton disabled={FormikProps.isSubmitting}
              type="submit">Guardar</Boton>
            <Link className="btn btn-secondary" to="/generos">Cancelar</Link>

          </Form>
        )}

      </Formik>
    </>
  )
}

interface formularioGenerosProps {
  model: genderDTO; //el tipo de datos de modelo son las propiedades necesarias para crear un genero basicamente esto lo hacemos para que el tipo de dato que acepte sea un objeto con las propiedades como nombre, descripcion,ect. 
  onSubmit(valores: genderDTO, accion: FormikHelpers<genderDTO>): void //aqui le estamos pasando esos dos parametros a esa funcion, uno tiene el valor de las propiedades necesarias para la creacion del genero y la otra es por si quieres inventar un poco con acciones 
}