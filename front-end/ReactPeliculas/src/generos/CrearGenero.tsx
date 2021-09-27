import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { urlGeneros } from "../peliculas/utilidades/endPoints";
import ShowErrorList from "../peliculas/utilidades/ShowErrorList";
import ValidacionesMayuscula from "../Validaciones";
import FormularioGeneros from "./FormularioGeneros";
import { genderDTO } from "./generos.model";

ValidacionesMayuscula();

export default function CrearGenero() {
  
  const [errorList, setErrorList] = useState<string[]>([]);
  
   const history = useHistory(); 
  async function createGender(gender:genderDTO) {
    try {
      await axios.post(urlGeneros,gender);
      history.push("/generos")
    } catch (error:any) {
    setErrorList(error.response.data);
    }
  }
  return (
    <>
      <h1>Crear género</h1>
      <ShowErrorList errors = {errorList}/>
      <FormularioGeneros model={{ nombre: "" }}
        onSubmit={async values => {
       await createGender(values);
        }}
      />
      {/*   <Boton onClick = {() => history.push("/generos")}>Guardar</Boton> este es el ejemplo viejo de como usar el componente boton*/}
    </>

  )
}