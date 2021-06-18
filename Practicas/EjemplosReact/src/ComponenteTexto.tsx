export default function ComponenteTexto(props: textoProps){ //los props son las propiedades del componente
return(
    <div>
        {props.texto /*texto es una propiedad de la interfaz que creamos abajo*/}
    </div>
)
}

interface textoProps{ //utilizar interfaces en vez de "props: any" nos ahorra errores
    texto:string;
}