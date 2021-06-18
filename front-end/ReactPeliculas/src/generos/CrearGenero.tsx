import React from "react";
import { useHistory } from "react-router";
import ValidacionesMayuscula from "../Validaciones";
import FormularioGeneros from "./FormularioGeneros";

ValidacionesMayuscula();

export default function CrearGenero() {
  const history = useHistory();
  return (
    <>
      <h1>Crear género</h1>
      <FormularioGeneros modelo={{ nombre: "" }}
        onSubmit={async valores => {
          await new Promise(r => setTimeout(r, 3000))
          console.log(valores)
        }}
      />
      {/*   <Boton onClick = {() => history.push("/generos")}>Guardar</Boton> este es el ejemplo viejo de como usar el componente boton*/}
    </>

  )
}