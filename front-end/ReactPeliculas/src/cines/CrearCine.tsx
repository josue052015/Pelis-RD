import FormularioCine from "./FormularioCine";

export default function CrearCine(){
    return(
    <>
      <h1>Crear cine</h1>
      <FormularioCine modelo = {{nombre:""}} 
        onSubmit = {e => console.log(e)}
        />
    </>
    )
}