using apipeliculas.Entitades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apipeliculas.Repositorios
{
   public interface IRepositorios
    {
        List<Genero> ObtenerTodosLosGeneros(); //nos tenemos que traer la asignatura del metodo
        Task<Genero> obtenerPorId(int id);
    }
}
