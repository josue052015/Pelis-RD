import { number } from "yup/lib/locale"

export interface genderDTO{ //con esto representamos las propiedades necesarias para crear un genero
    nombre: string;
}

export interface genderListDTO{
    id: number;
    nombre: string;
}

