import { ErrorMessage, Field } from "formik";
import React from "react";

export default function Formulario(props: FormularioProps) {
    return (
        <>
            <div className="form-group">
                {props.label ? <label htmlFor="nombre">{props.campo}</label> : null}
                <Field name={props.campo} placeholder={props.placeholder} className="form-control" /> {/* Esto hace una sincronizacion con el la propiedad nombre del formulario y nos prepara todo lo que necesitamos para trabajar */}

                <ErrorMessage name={props.campo}>
                    {mensaje => <div className="text-danger">{mensaje}</div>}
                </ErrorMessage>
            </div>
        </>
    )
}

interface FormularioProps {
    campo: string;
    label?: string;
    placeholder?: string;
}