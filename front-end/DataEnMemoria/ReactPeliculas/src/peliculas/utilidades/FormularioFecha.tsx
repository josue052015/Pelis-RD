import { useFormikContext } from "formik"
import MensajeError from "./MensajeError";

export default function FormularioFecha(props: formularioFechaProps) {
    const { values, validateForm, touched, errors } = useFormikContext<any>(); //formik nos permite utilizar el contexto de cualquier otro componente formik
    return (
        <div className="form-group">

            <label htmlFor={props.campo}>{props.label}</label>

            <input type="date" className="form-control" id={props.campo} name={props.campo}
                defaultValue={values[props.campo]?.toLocaleDateString("en-CA")}
                onChange={e => {
                    const fecha = new Date(e.currentTarget.value + "T00:00:00");
                    values[props.campo] = fecha;
                    validateForm(); //esto es para validar el formulario
                }}
            />
            {/*(nota: usamos el ! para indicarle que va a ser siempre un string no un undefined porque en el formulario de crear le estamos pasando un undefined) 
            Esto basicamente lo que pregunta es que si el campo fue tocado o si se presento algun error en el campo en caso positivo tirara la alerta de lo contrario sera nulo, porque no paso nada */}

            {touched[props.campo] && errors[props.campo] ? <MensajeError mensaje={errors[props.campo]?.toString()!} /> : null}

        </div>
    )
}

interface formularioFechaProps {
    campo: string;
    label: string;
}