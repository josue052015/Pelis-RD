import modulocss from './Ejemplo.module.css';

export default function Ejemplocss (){

    const propiedadescss = {
        backgroundColor: 'green',
        width: "50px",
        height: "50px",
        marginLeft: "1rem"
      }
      

    return(
        
         //que pasaria si quisieramos poner 2 <h></h> en xml (cosa que no es admitida de por si)? tendriamos que poner <></>
         <>
    <h1>hola mundo</h1>


<div className= "cuadradorojo">App.css</div> {/*tenemos que poner classname en vez de class porque esto es jsx no html*/}

{/*imagina que quisieramos agregar un css directamente en jsx*/}
<br />
<div style = {{backgroundColor: 'blue',width: "50px",height: "50px",marginLeft: "1rem"}}>css en el jsx</div> {/*tienes que crear un style{} que contenga un objeto dentro que va a ser las propiedades css*/}

<br />

<div style = {propiedadescss}>index.css</div>
<br />
{/*vamos a utilizar un modulo de css que es por si tenemos una clase repetida se utilizara la de este modulo en especifico y se vera como una clase con un nombre aleatorio */}

<div className = {modulocss.cuadradorojo}>module.css</div>

        </>
    )
}