import "./SelectorMultiple.css"

export default function SelectorMultiple(props: selectorMultipleProps) {
    function seleccionar(item: selectorMultipleModel) {
        const seleccionados = [...props.seleccionados, item]; // aqui estamos utilizando la lista de elementos que ya tenemos seleccionados y añadiendo el proximo
        const noSeleccionados = props.noSeleccionados.filter(e => e !== item);
        props.onChange(seleccionados, noSeleccionados);
    }

    function deseleccionar(item: selectorMultipleModel) {
        const seleccionados = props.seleccionados.filter(e => e !== item);
        const noSeleccionados = [...props.noSeleccionados, item];
        props.onChange(seleccionados, noSeleccionados);
    }
    function SelectAll() {
        const seleccionados = [...props.seleccionados, ...props.noSeleccionados];
        const noSeleccionados: selectorMultipleModel[] = []; //le pusimos esto para ser especifico con el tipo de dato de este, ya que ahora es como un any
        props.onChange(seleccionados, noSeleccionados);
    }

    function Cancel(){
        const noSeleccionados = [...props.noSeleccionados,...props.seleccionados];
        const seleccionados: selectorMultipleModel[] = [];
        props.onChange (seleccionados,noSeleccionados);
    }
    return (
        <>
            <div className="selector-multiple">
                <ul>
                    {props.noSeleccionados.map(item =>
                        <li key={item.llave} onClick={() => seleccionar(item)} > {item.valor} </li>
                    )}
                </ul>
                <div className="selector-multiple-botones">
                    <button type="button" onClick={SelectAll}> {"Select All"} </button>
                    <button type="button" onClick={Cancel}> {"Cancel"} </button>
                </div>
                <ul>
                    {props.seleccionados.map(item =>
                        <li key={item.llave} onClick={() => deseleccionar(item)} > {item.valor} </li>
                    )}
                </ul>
            </div>
        </>
    )
}

interface selectorMultipleProps {
    seleccionados: selectorMultipleModel[];
    noSeleccionados: selectorMultipleModel[];
    onChange(seleccionados: selectorMultipleModel[], noSeleccionados: selectorMultipleModel[]): void
}

export interface selectorMultipleModel {
    llave: number;
    valor: string;
}