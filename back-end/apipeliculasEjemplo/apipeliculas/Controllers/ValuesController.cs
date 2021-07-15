using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apipeliculas.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace apipeliculas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ValuesController : ControllerBase
    {
        private readonly IRepositorios repo;

        public ValuesController (IRepositorios repo)
        {
            this.repo = repo;
         
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<dynamic>> Get()
        {
            /*var repositorio = new RepositorioEnMemoria();
            var generos = repositorio.ObtenerTodosLosGeneros(); esto es sin inyeccion de dependencias lo que significa que tendremos que cambiar esta instancia en todos los metodos si queremos cambiar de repositorio o clase*/

            var hola = repo.ObtenerTodosLosGeneros();

            return new dynamic[] { "value1", "value2",hola};
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
