import React, { ReactElement } from "react";

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState>{

    constructor(props: ErrorBoundaryProps) {
        super(props); // esto es para trabajar con la clase base
        this.state = { hayerror: false, mensaje: "" } //este es el estado
    }

    componentDidCatch(error: any, errorInfo: any) { //el componentDidCatch es una funcion que se va a ejecutar si hay un error en el componente
        console.log(error);
        console.log(errorInfo);
    }

    static getDerivedStateFromError(error: any) { //esta funcion lo que hace es cambiar el estado en caso de que haya un error
        console.log(error);
        return { hayerror: true, mensaje: error };
    }

    render() { //esto determina lo que se va a renderizar
        if (this.state.hayerror) { //lo que hacemos es que si la propiedad del error de estado es true ejecutamos lo siguiente:

            if (this.props.errorUI) { //en este if lo que hacemos es decidir si el programador creo una interfaz de error utilizarla, si no , usar un valor por defecto
                return this.props.errorUI
            } else {
                return <h3>{this.state.mensaje}</h3>
            }

        }
        return this.props.children //aqui retornamos esto en caso de que no haya un error porque se supone que en caso de que no haya un error retorne lo que querias renderizar
    }

}

interface ErrorBoundaryState {
    hayerror: boolean;
    mensaje: string;
}

interface ErrorBoundaryProps {
    errorUI?: ReactElement; // tenemos que poner esto opcional para que errorboundary sea generico y no requiera de UI de error
}