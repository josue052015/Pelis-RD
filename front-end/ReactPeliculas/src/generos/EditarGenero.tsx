import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useHistory } from "react-router-dom";
import Cargando from "../peliculas/utilidades/Cargando";
import { urlGeneros } from "../peliculas/utilidades/endPoints";
import ShowErrorList from "../peliculas/utilidades/ShowErrorList";
import FormularioGeneros from "./FormularioGeneros";
import { genderDTO, genderListDTO } from "./generos.model";

export default function EditarGenero() {
  const { id }: any = useParams();// esto es un react hook para obtener la variable de ruta
  const [gender, setGender] = useState<genderListDTO>();
  const [errors, setErrors] = useState<string[]>([]);
const history = useHistory();

  useEffect(() => {
    axios.get(`${urlGeneros}/${id}`)
    .then((response: AxiosResponse<genderListDTO>) =>{
      setGender(response.data);
    })
  })

  async function editGender(gender:genderDTO) {
    try{
      axios.put(`${urlGeneros}/${id}`, gender);
    }
    catch(error){
      setErrors(error.response.data);
    }
  }
  return (
    <>
      <h1>Editar género</h1>
      <ShowErrorList errors = {errors}/>
      {gender ? <FormularioGeneros model={gender}
        onSubmit={async values => {
        await editGender(values);
        history.push("/generos")
        }}
      /> : <Cargando/>}
      


      {/*         <h5>La variable es {id} </h5>  */}
    </>

  )
}