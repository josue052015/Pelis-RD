
import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react"

export default function FormularioImagen(props: formularioImagenProps) {

    const divStyle = { marginTop: "10px" }
    const imgStyle = { width: "450px" }

    const [imagenBase64, setImagenBase64] = useState("");
    const [cambioImagen, setCambioImagen] = useState(props.imagenURL);

    const { values } = useFormikContext<any>();

    const aBase64 = (file: File) => { // esta funcion nos convierte un archivo a base64, y tuvimos que crear una promesa porque es una operacion asincrona, es decir que talvez se tarde porque va a solicitar datos al servidor
        return new Promise<string>((resolve, reject) => { //lo que retorna la promesa es la representacion a base64 y resolve es cuando tenemos exito y reject es cuando tenemos un error
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string); // esto es cuando deje de leer el archivo
            reader.onerror = (error) => reject(error); // esto es si hay un error
        })
    }

    const imagenOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0]; //guardamos el archivo en esta variable
            aBase64(archivo) //convertimos ese archivo a base64
                .then((representacionBase64: string) => setImagenBase64(representacionBase64))// lo que hace esto es que usa el estado en el parametro de la funcion el cual contiene el dato de la variable que almacena la imagen convertida a base64  //aqui tuvimos que utilizar estado porque queremos que la imagen seleccionada se le muestre al usuario y queremos cambiar el valor de esa variable y que se muestre en tiempo real
                .catch(error => console.error(error))

            values[props.campo] = archivo; //values es el contexto de formik que usamos para pasar datos entre componentes de formik
            setCambioImagen(""); //aqui decimos que cuando se seleccione la nueva imagen la otra url de la imagen por defecto pasara a ser un string vacio
        }
    }

    return (
        <>
            <div className="form-group">
                <label>{props.label}</label>
                <div>
                    <input type="file" accept=".jpg,.jpeg,.png" onChange={imagenOnChange} />
                </div>
                {imagenBase64 ?
                    <div>
                        <div style={divStyle}>
                            <img style={imgStyle} src={imagenBase64} alt="imagen seleccionada" />
                        </div>
                    </div> : null
                }
                {/*  ahora tenemos que crear un estado para cuando se cambie la imagen se quite la que estaba por default */}

                {cambioImagen ?
                    <div>
                        <div style={divStyle}>
                            <img style={imgStyle} src={cambioImagen} alt="imagen seleccionada" />
                        </div>
                    </div> : null
                }
            </div>
        </>
    )
}

interface formularioImagenProps {
    campo: string;
    label: string;
    imagenURL: string;
}

FormularioImagen.defaultProps = {
    imagenURL: ""
}