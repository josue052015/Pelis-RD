using apipeliculas.Entitades;
using apipeliculas.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apipeliculas.Controllers
{
    [Route("api/generos")]
    public class GenerosController : ControllerBase // esto lo hacemos para acceder a los metodos auxiliares
    {
        private readonly IRepositorios repo;

        public GenerosController(IRepositorios repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public List<Genero> Get()
        {
            return repo.ObtenerTodosLosGeneros();
        }
       
        [HttpGet("{id}")]

        //todos los metodos que llamen a otro asincrono tambien tienen que ser asincronos
        public async Task<ActionResult<Genero>> Get(int id) //recuerda que en los metodos asincronos el dato de retorno tiene que ser un task de algo

            //utilizamos action result porque es flexible a los tipos de datos de retorno
            //con el action result ponemos retorne algo de tipo genero o de algo que sea heredado de la clase actionResult NO OTRA COSA
        {
            var  genero = await repo.obtenerPorId(id); //con el await pudimos sacar el genero como tal del task de generos
            if (genero == null)
            {
               return NotFound(); 
            }
            return genero;

        }

        [HttpPost]
        public ActionResult Post()
        {
            return NoContent();
        }
        [HttpPut]
        public ActionResult Put()
        {
            return NoContent();
        }
        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }
    }
}
