
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
import Menu from './peliculas/utilidades/Menu';
import rutas from "./Configuracion-rutas";

function App() {

  return (

    <>
      <BrowserRouter>  {/* tenemos que encerrar todo en este browserRouter */}
        <Menu />
        <div className="container"> {/* pusimos este div encima de todo para que cualquier componente tenga la clase "container" */}
          {/*  <Boton>Aprietame</Boton> 
               <br /><br />
              <Bot2 /> */}
          <Switch> {/* esto te permite mostrar un componente u otro segun la ruta */}


            {/* Esto lo vamos a sustituir por un mapeo de las rutas que nos cree un route por cada ruta
                 <Route exact path = "/">
           <LandingPage/>
           </Route>
            <Route path = "/generos">
           <IndiceGeneros/>
            </Route> */}
            {rutas.map(e => <Route key={e.path} path={e.path} exact={e.exact}> <e.componente /> </Route>)}
          </Switch>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
