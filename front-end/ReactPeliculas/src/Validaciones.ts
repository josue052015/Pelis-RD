import * as yup from "yup"

export default function ValidacionesMayuscula() {
    yup.addMethod(yup.string, "PrimeraLetraMayuscula",
        function () {
            return this.test("primera-letra-mayuscula", "La primera letra debe ser mayúscula",
                function (valor) {
                    if (valor && valor.length > 0) { //en este caso comparamos de que no sea null o vacio, si lo es retornamos true para que no haga esta validacion porque ya tenemos la de required
                        const primeraletra = valor.substring(0, 1);
                        return primeraletra === primeraletra.toUpperCase();
                    }
                    return true;
                })
        })

}