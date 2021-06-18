import { NavLink } from "react-router-dom";

export default function Menu(){
const claseActiva = "active";

    return(
        // NOTA IMPORTANTE: en vez de <a></a> utilizaremos navlink porque <a></a> lo que hace es un recargado completo y nav link se utiliza de la siguiente forma:
        //activeClassName= {claseActiva} lo que hace esto es que cuando el usuario se encuentre en el sitio de ese link activara como una negrita señalando que esta en esa parte del menu
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
          <div className = "container-fluid">
             <NavLink className="navbar-brand" activeClassName= {claseActiva} to="/">PelisRD</NavLink>
               <div className ="collapse navbar-collapse">
                   <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className ="nav-item">
                          <NavLink className ="nav-link" activeClassName= {claseActiva} to="/generos">
                              Géneros
                          </NavLink>
                      </li> 

                      <li className ="nav-item">
                          <NavLink className ="nav-link" activeClassName= {claseActiva} to="/peliculas/filtrar">
                              Filtrar película
                          </NavLink>
                      </li>

                      <li className ="nav-item">
                          <NavLink className ="nav-link" activeClassName= {claseActiva} to="/actores">
                              Actores
                          </NavLink>
                      </li> 

                      <li className ="nav-item">
                          <NavLink className ="nav-link" activeClassName= {claseActiva} to="/cines">
                              Cines
                          </NavLink>
                      </li> 

                      <li className ="nav-item">
                          <NavLink className ="nav-link" activeClassName= {claseActiva} to="/peliculas/crear">
                              Crear película
                          </NavLink>
                      </li> 

                   </ul>
               </div>
          </div>
        </nav>
    )
}
