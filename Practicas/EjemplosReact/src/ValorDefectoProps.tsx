export default function ValorDefectoProps(props: ValorDefectoProps){
    return(
<>
<div>
{props.valorapresentar}
<br />
{props.valoropcional /*a este otro lo haremos opcional con los defaulProps pero tambien puedes hacerlo aqui mismo con el operador ternario que en dado caso de que no le manden nada establece un valor por defecto*/}
</div>
<br />
<br />
</>

    )
}

interface ValorDefectoProps{
    valorapresentar: string;
    valoropcional: string;
}

ValorDefectoProps.defaultProps= {
valoropcional: "Valor por defecto con defaulProps" //lo que hacemos aqui es que le mandamos un valor por defecto en caso de que no le manden ningun valor en el otro componente, para que no hayan errores
}