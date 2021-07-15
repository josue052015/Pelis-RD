using peliculasApi.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peliculasApi.Repositorios
{
    public class RepositorioEnMemoria
    {
        private list<Genero> _generos;
        public RepositorioEnMemoria()
        {
            _generos = new list<Genero>()
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
