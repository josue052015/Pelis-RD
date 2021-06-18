import { MapContainer, TileLayer, useMapEvent, Marker } from "react-leaflet"
import L from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import "leaflet/dist/leaflet.css"
import { coordenadaDTO } from "./coordenada.model"
import React, { useState } from "react"


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
    // esto sirve par que el marcador se ponga en el lugar correcto
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa(props: mapaProps) {
    const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>(props.coordenadas)//aqui lo definimos del tipo arreglo de coordenadaDTO 

    return (
        <>
            <MapContainer center={[18.509988654130634, -69.85047725132794]} zoom={14}
                style={{ height: props.height }}
            >
                <TileLayer attribution="React Películas" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/* vamos a invocar a click mapa para mostrar la nueva ubicacion en el UI, Basicamente esto de aqui abajo actualiza el valor del DTO con las coordenadas actuales y luego muestra el marcador en esa posicion*/}


                <ClickMapa setPunto={e => { //set punto es una funcion del props de clickmapa
                    setCoordenadas([e]) // aqui actualizamos el estado de las coordenadas

                    props.manejarClickMapa(e); //aqui le pasamos las coordenadas a esta funcion del props cuando el usuario cambie de coordenadas haciendo click, eso hara que en el DTO del formulario tambien se cambiaran las coordenadas
                }} />

                {coordenadas.map(coordenadaIndividual => <MostrarMarcadorUbicacion key={coordenadaIndividual.longitud + coordenadaIndividual.longitud}
                    {...coordenadaIndividual} // destructuramos el valor de ese arreglo para indicarle la posicion que sera el elemento individual de ese arreglo, pero destructurado
                />)}

            </MapContainer>
        </>
    )
}
function MostrarMarcadorUbicacion(props: coordenadaDTO) {
    return (
        <Marker position={[props.latitud, props.longitud]} />
    )
}

function ClickMapa(props: clickMapaProps) {
    useMapEvent("click", e => {
        props.setPunto({ latitud: e.latlng.lat, longitud: e.latlng.lng }) //aqui cuando se registre el evento click en el mapa le mandamos las coordenadas actuales como parametro a la funcion setPunto
    })

    return null;
}

interface clickMapaProps {
    setPunto(coordenadas: coordenadaDTO): void;
}

/*-----------------PROPS DEL COMPONENTE-------------------------*/

interface mapaProps {
    height: string;
    coordenadas: coordenadaDTO[];
    manejarClickMapa(coordenadas: coordenadaDTO): void;
}

Mapa.defaultProps = {
    height: "500px"
}




