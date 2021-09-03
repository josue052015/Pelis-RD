export default function ShowErrorList(props: showErrorListProps){
    const style = {color : "red"}
return(
    <>
    {props.errors ? <ul style = {style}>
        {props.errors.map((error,id) => <li key = {id}>{error}</li>)}
    </ul> : null} 
    </>
)
}

interface showErrorListProps{
    errors?: string[];
}