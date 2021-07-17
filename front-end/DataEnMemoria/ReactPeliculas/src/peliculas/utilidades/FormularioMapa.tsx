import { useFormikContext } from "formik";
import { coordenadaDTO } from "./coordenada.model";
import Mapa from "./Mapa";

export default function FormularioMapa(props: mapaFormularioProps){
    //con esto le insertamos a formik los valores del formulario de formik las coordenadas seleccionadas por el usuario
const {values} = useFormikContext<any>()

function actualizarCampos(coordenadas:coordenadaDTO){ //la latitud del props sera igual a la latitud del DTO que se actualizo con la funcion setPunto del Mapa.tsx
values[props.campoLatitud] = coordenadas.latitud;
values[props.campoLongitud] = coordenadas.longitud;
}

return(
    <>
     <Mapa
    coordenadas = {props.coordenadas}
    manejarClickMapa = {actualizarCampos}
    /> 
    </>
)
}

interface mapaFormularioProps{
coordenadas: coordenadaDTO[];
campoLatitud: string;
campoLongitud: string;
}

FormularioMapa.defaultProps = {
    coordenadas: []
}