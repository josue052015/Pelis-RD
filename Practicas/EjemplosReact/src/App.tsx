import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { time } from 'console';
import ProyectarContenido from './ProyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import Ejemplousestate from './Ejemplousestate';
import EjemploReloj from './EjemploReloj';
import { constants } from 'buffer';
import ValorDefectoProps from './ValorDefectoProps';
import ContenidoDinamico from './ContenidoDinamico';
import InputComponente from './InputComponente';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './ValorContext';
import Componente2Provider from "./Componente2Provider";
import ErrorBoundary from "./ErrorBoundary";

function App() {

  const subtitulo = "subtitulo";

  const duplicar = (numero: number) => numero * 2; //tenemos que poner number porque aqui se utiliza typescript en el caso de la variable de arriba no tuvimos que ponerlo porque queda claro cuando le pusimos el dato.

  const imagen = "https://miro.medium.com/max/3604/1*9i0fZ9otnPpsWN_C8YoH2w.png";

  const click = () => alert("me clickeasteee");



  {/*funcion con parametros */ }

  const tecleo = (e: string) => {  //en esta funcion solo le decimos qué hacer al componente con los datos que recibimos del hijo
    alert(e);

  }

  const ejemplodeprops = "se presentar desde otros componentes";
  /*...........................................................................................*/

  const partesuperior = <Ejemplousestate />
  const estilo = {
    backgroundColor: "red",
    width: "50px",
    height: "50px",
    marginLeft: "1rem"
  }
  const parteinferior = <div style={estilo}></div>

  let notas = [
    { id: 1, nombre: "pedro", nota: -1 },
    { id: 2, nombre: "juana", nota: 80 },
    { id: 3, nombre: "pepito", nota: 60 }
  ]
  const [chequeado, setChequeado] = useState(false)

  const valordelprovider = "ejemplo del provider"
  return (

    //que pasaria si quisieramos poner 2 <h></h> en xml (cosa que no es admitida de por si)? tendriamos que poner <></>
    <>
      {/* <ContenidoDinamico mostrarsecreto = {true}/> esto es en el caso de 2 opciones*/}

      {notas.map(n =>
        <ErrorBoundary > {/*  tenemos que entrar la llamada de componente entre el ErrorBoundary que creamos para que atrape cualquier error */}
          <ContenidoDinamico key={n.id} {...n} />
        </ErrorBoundary>
      )}

      {/*  para utilizar un ErrorBoundary con un UI de error se haria asi:  <ErrorBoundary errorUI = {<h3>error mostrando los datos</h3>}></ErrorBoundary> */}
      {/*El key es necesario porque tenemos varios elementos y el operador sprech es para obtener lo que retornamos en ContenidoDinamico*/}
      <br /><br /><br />

      <ValorContext.Provider value={valordelprovider}>
        <Componente2Provider /> {/* este es el componente ancestro */}
      </ValorContext.Provider>

      <input
        onChange={(e) => setChequeado(e.currentTarget.checked)} //estado del elemento
        checked={chequeado} //valor por defecto
        type="checkbox" /> selecciona para ver el useEffect en accion
      <br />

      {chequeado ? <EjemploUseEffect /> : null} {/* aqui lo que hacemos es que si el useState "chequeado es true mostramos lo que retorna el otro componente, de lo contratrio lo que se mostrara es nulo" */}


      <br /> <br /> <br />

      <ValorDefectoProps valorapresentar={ejemplodeprops} />

      <ProyectarContenido2
        partesuperior={partesuperior} //podemos traer resultados de otros componentes
        partemedia={<h1>Esta es la parte media</h1>}
        parteinferior={parteinferior}
      />


      <ProyectarContenido>
        <>
          <span>Estamos proyectando desde otro componente</span>
          <img src={imagen} alt="programacion" />
        </>
      </ProyectarContenido>


      <h1>hola mundo</h1>


      <button onClick={click}>clickeame</button>

      <button onClick={() => alert("click desde la etiqueta button")}>click2</button>

      <button onMouseEnter={() => alert("pasaste el mouse por encima")}>click3</button>

      {/*funcion con parametros */}

      <h1>Ejemplo de comunicacion de hijo a padre</h1>
      <InputComponente tecleo={(e: string) => tecleo(e)} />  {/*Esto basicamente representa el input que pusimos en otro componente .Recuerda que en el parametro e hay que ponerle su tipo de dato*/}


      <h3>{subtitulo.toUpperCase() /*toUpperCase lo que hace es convertir todo el texto a mayuscula*/}</h3>
      <h4>el doble de 5 es {duplicar(5)}</h4>




    </>
  );
}

export default App;
