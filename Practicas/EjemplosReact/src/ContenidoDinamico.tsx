export default function ContenidoDinamico(props: any) {

    //ejemplo1: operador ternario que sirve para 2 opciones
 /*    return(
<>
<div>
{props.mostrarsecreto ? <span>secretito</span>: null}
</div>
<br />
<br />
</>
    ) */

    //Ejemplo2: if, que sirve para mas de 2 opciones

    if(props.nota >= 90){
return(
    <>
    <span>{props.nombre}Eres excelente </span>
    <br />
    <br />
    </>
   
)
}else if(props.nota >= 80){
return(
    <>
    <span>{props.nombre}Eres bacano </span>
    <br />
    <br />
    </>
)
    }else if(props.nota >= 70){
        return(
            <>
               <span>{props.nombre}Tienes que mejorar </span>
               <br />
               <br />
            </>
        )
            }else if (props.nota >= 1){
                return(
                    <>
                      <span>{props.nombre}Tienes que estudiar </span>
                      <br />
                      <br />
                    </>
                )
                    }else {
                           throw `${props.nombre} ocurrio un problema con tu nota `; 
                            }


}