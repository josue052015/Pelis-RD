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
            _guid = Guid.NewGuid(); //un guid es un string ramdon y nos servira para probar lo de los servicios
        }
        public Guid _guid;
        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }

        //vamos a simular que este metodo se comunica asincronamente 
        public async Task<Genero> obtenerPorId(int id)       //tenemos que llevar esto a la interfaz
        {
            //siempre que declaramos un metodo asincrono tenemos que hacer que su tipo de dato de retorno sea un task de algo, un task es un valor prometido
            await Task.Delay(TimeSpan.FromSeconds(1));
            return _generos.FirstOrDefault(x => x.id == id); 
        }

        public Guid ObtenerGUID()
        {
            return _guid;
        }
    }
}
