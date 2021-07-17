import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import "./FormularioMarkDown.css"

export default function FormularioMarkDown(props: formularioMarkDownProps) {
    const { values } = useFormikContext<any>();

    return (
        <>
            <div className="form-group form-markdown">
                <div>
                    <label>{props.label}</label>
                    <div>
                        <Field name={props.campo} as="textarea" className="form-textarea" />
                    </div>
                </div>
                {/* aqui agragaremos el preview de markdown */}
                <div>
                    <label>{props.label} </label>
                    <div className="markdown-container">
                        <ReactMarkdown>{values[props.campo]}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    )
}

interface formularioMarkDownProps {
    campo: string;
    label: string;
}