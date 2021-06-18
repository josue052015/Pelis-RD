import { useParams } from "react-router"
import FormularioGeneros from "./FormularioGeneros";

export default function EditarGenero(){
    const {id}: any = useParams();// esto es un react hook para obtener la variable de ruta
    return(
        <>
        <h1>Editar género</h1>
      <FormularioGeneros modelo={{ nombre: "Valor por defecto" }}
        onSubmit={async valores => {
          await new Promise(r => setTimeout(r, 100))
          console.log(valores)
        }}
      />

{/*         <h5>La variable es {id} </h5>  */}
        </>
       
    )
}