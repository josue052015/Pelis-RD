import funcionimportada ,{nombre,apellido, edad,duplicar} from "./estudiante.js" //despues tenemos que importar lo que exportamos para utilizarlo
//importar el valor por defecto, lo unico que cambia son las llaves

//import nombre from "./estudiante"
//si quieres importar todo junto seria:
//import nombre, {apellido, edad} from "./estudiante"
document.getElementById("app").innerHTML = `
<h1> 1)${nombre} 2)${apellido} 3)${edad} 4)${duplicar(4)} 5)${funcionimportada.mensaje()}</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>

`;