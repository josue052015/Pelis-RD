import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListadoGenerico from "../peliculas/ListadoGenerico";
import { urlGeneros } from "../peliculas/utilidades/endPoints";
import PaginationComponent from "../peliculas/utilidades/PaginationComponent";
import { genderDTO, genderListDTO } from "./generos.model";
import confirm from "../peliculas/utilidades/confirm";

export default function IndiceGeneros() {

  const [genderList, setGenderList] = useState<genderListDTO[]>();
  const [totalPage, setTotalPage] = useState(0);
   const [pageRecords,setPageRecords] = useState(10);
    const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
  }, [page, pageRecords,genderList])

  function loadData(){
    axios.get(urlGeneros, {
      params: { page, pageRecords }
    })
      .then((response: AxiosResponse<genderListDTO[]>) => {
          const countRegistryPage =
            parseInt(response.headers['cantidadtotalregistros'], 10);
          setTotalPage(Math.ceil(countRegistryPage / pageRecords));
          setGenderList(response.data);

        })
  }

  async function deleteGender(id: any){
    try {
     
     await axios.delete(`${urlGeneros}/${id}`);
     loadData();
    } catch (error:any) {
      console.log(error.response.data);
    }
  }
  
  return (
    <>
      <h1>Géneros</h1>
      <Link to="/generos/crear">Crear géneros</Link>
     
     <div className = "form-group" style = {{width: "150px", paddingTop: "10px"}}>
       <label>Registros por página:</label>
     <select 
     className = "form-control"
     defaultValue = {10}
     onChange = {e =>{
       setPage(1);
      setPageRecords(parseInt(e.currentTarget.value,10))
     }}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
     </div>

      <PaginationComponent pageAmountTotal={totalPage} actualPage={page}
        onChange={newPage => setPage(newPage)} />



      <ListadoGenerico listado={genderList}  >
        <table className="table table-striped">
          <thead>
            <tr>
              <th >Acciones</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {genderList?.map(gender => <tr key={gender.id}>
              <td>
                <Link className="btn btn-success" to={`/generos/editar/${gender.id}`}>
                  Editar
                </Link>
                <button className="btn btn-danger" onClick = {() => confirm(() => deleteGender(gender.id))}>Borrar</button>
              </td>
              <td>
                {gender.nombre}
              </td>
            </tr>)}
          </tbody>
        </table>
      </ListadoGenerico>

    </>

  )
}