export default function MensajeError(props: mensajeErrorProps){
    return (
        <div className="text-danger">{props.mensaje}</div>
    )
}

interface mensajeErrorProps{
    mensaje: string;
}