using apipeliculas.Entitades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apipeliculas.Repositorios
{
    public class RepositorioEnMemoria : IRepositorios // con esto indicamos que vamos a utilizar esa interfaz
    {
        // esto contiene data de prueba
        private List<Genero> _generos;
        public RepositorioEnMemoria()
        {
            _generos = new List<Genero>()
            {
                new Genero(){id = 1, nombre = "Comedia"},
                new Genero(){id = 2, nombre = "Acción"}
            };
        }
        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }
    }
}
