using apipeliculas.Entitades;
using apipeliculas.Filters;
using apipeliculas.Repositorios;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apipeliculas.Controllers
{
    [Route("api/generos")]
    [ApiController]
   // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class GenerosController : ControllerBase // esto lo hacemos para acceder a los metodos auxiliares
    {
        private readonly IRepositorios repo;
        private readonly ILogger<GenerosController> logger;

        public GenerosController(IRepositorios repo, ILogger<GenerosController> logger)
        {
            this.repo = repo;
            this.logger = logger;
        }

        [HttpGet]
        //  [ResponseCache(Duration = 60)]
       // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
       [ServiceFilter(typeof(ActionFilter))]
        public List<Genero> Get()
        {
            logger.LogInformation("Estamos usando logger");
            return repo.ObtenerTodosLosGeneros();
        }
        [HttpGet("Guid")]
        public ActionResult<Guid> GetGUID()
        {
            return repo.ObtenerGUID();
        }

        [HttpGet("{id}")]

        //todos los metodos que llamen a otro asincrono tambien tienen que ser asincronos
        public async Task<ActionResult<Genero>> Get(int id) //recuerda que en los metodos asincronos el dato de retorno tiene que ser un task de algo

            //utilizamos action result porque es flexible a los tipos de datos de retorno
            //con el action result ponemos retorne algo de tipo genero o de algo que sea heredado de la clase actionResult NO OTRA COSA
        {
            logger.LogDebug($"obteniendo la información del id {id}");
            var  genero = await repo.obtenerPorId(id); //con el await pudimos sacar el genero como tal del task de generos
            if (genero == null)
            {
                logger.LogWarning($"no se pudo encontrar la info del id {id}");
               return NotFound(); 
            }
            return genero;

        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero Gender)
        {
            return NoContent();
        }
        [HttpPut]
        public ActionResult Put([FromBody] Genero Gender)
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
