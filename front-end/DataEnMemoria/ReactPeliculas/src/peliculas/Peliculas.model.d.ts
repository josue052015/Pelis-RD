import { actorPeliculaDTO } from "../actores/actores.model";

  export interface pelicula{
    id: number;
    titulo: string;
    poster:string;
}  

export interface contenedorPeliculas { //tenemos dos arreglos de peliculas... las en cartelera o proximamente
  enCartelera?: pelicula[];  
  proximamente?: pelicula[];
}

export interface creacionPeliculasDTO{
  titulo: string;
  enCines: boolean;
  trailer: string;
  fechaLanzamiento?: Date;
  poster?: File;
  posterURL?: string; //esto es un dato temporal para la url del poster
  generosIds?: number[]; // esto lo vamos a usar para obtener el arreglo de ids de generos
  cinesIds?: number[];
  actores?: actorPeliculaDTO[];
}