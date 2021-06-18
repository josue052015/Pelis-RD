import FormularioActores from "./FormularioActores";

export default function CrearActores() {
    return (
        <>
            <h1>Crear Actor</h1>
            <FormularioActores modelo={{ nombre: "", fechaNacimiento: undefined }}
                onSubmit={e => console.log(e)}
            />
        </>
    )
}
