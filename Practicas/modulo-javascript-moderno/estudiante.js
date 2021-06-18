const nombre = "pedro";
const apellido ="mendez";
const edad = 19;
const duplicar = (valor) => valor * 2; 
export default class claseexportada{
  static mensaje(){
    return 'hola mundo'
  }
}

//para exportar algun dato para poder utilizarlo hay que hacer lo siguiente:
//export{nombre as default,apellido,edad,duplicar}
export{nombre,apellido,edad,duplicar}
//podemos exportar un valor por defecto