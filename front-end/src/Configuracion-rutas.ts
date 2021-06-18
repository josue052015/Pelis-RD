import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";
import CrearCine from "./cines/CrearCine";
import EditarCine from "./cines/EditarCine";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPelicula from "./peliculas/CrearPelicula";
import EditarPelicula from "./peliculas/EditarPelicula";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import Error404 from "./peliculas/utilidades/Error404";

//basicamente estamos haciendo un arreglo con todas las rutas que vamos a mapear mas adelante
//:/id(\\d+) es para obtener una variable de ruta es decir para obtener un id de todos los datos a editar a traves de la url 
const rutas = [
    {path: "/", componente: LandingPage, exact: true}, //el tercer parametro significa que si tiene que ser una ruta exacta
    {path: "/generos/crear", componente: CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero},
    {path: "/generos", componente: IndiceGeneros,exact: true}, //le podemos podemos poner la propiedad que queramos porque ya sabe que llamara a ese componente

    {path: "/actores/crear", componente: CrearActores},
    {path: "/actores/editar/:id(\\d+)", componente: EditarActores},
    {path: "/actores", componente: IndiceActores, exact: true},

    {path: "/cines/crear", componente: CrearCine},
    {path: "/cines/editar/:id(\\d+)", componente: EditarCine},
    {path: "/cines", componente: IndiceCines, exact: true},

    {path: "/peliculas/crear", componente: CrearPelicula},
    {path: "/peliculas/editar/:id(\\d+)", componente: EditarPelicula},
    {path: "/peliculas/filtrar", componente: FiltroPeliculas},



    {path: "*", componente: Error404} //esto siempre tiene que hacerse de ultimo ya que de lo contrario lo hara con todos los demas path
];

export default rutas;