import { number } from "yup/lib/locale"

export interface genderDTO{ //con esto representamos las propiedades necesarias para crear un genero
    name: string;
}

export interface genderListDTO{
    id: number;
    nombre: string;
}

