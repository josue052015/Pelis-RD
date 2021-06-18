import {StringSchema} from "yup"

declare module "yup"{
    class StringSchema {
        PrimeraLetraMayuscula(): this; //con esto le estamos agregando esta propiedad a la clase stringSchema del yup
    }
}