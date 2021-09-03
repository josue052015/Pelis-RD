using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PeliculasAPI.Context;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;
using PeliculasAPI.Filtros;
using PeliculasAPI.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.Controllers
{
    [Route("api/generos")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class GenerosController : ControllerBase
    {

  
        private readonly ILogger<GenerosController> logger;
        private readonly PeliculasDbContext _context;
        private readonly IMapper mapper;

        public GenerosController(
       
            ILogger<GenerosController> logger,
            PeliculasDbContext context,
            IMapper mapper
            )
        {
         
         
            this.logger = logger;
            this._context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/generos
        
        public async Task<ActionResult<List<GeneroDTO>>> Get([FromQuery] paginationDTO paginacionDTO)
        {

            var queryable = _context.Generos.AsQueryable();
            await HttpContext.InsertPaginationParamsThroughHeader(queryable);
            var gender = await queryable.OrderBy(x => x.Nombre).Paging(paginacionDTO).ToListAsync();
            return mapper.Map<List<GeneroDTO>>(gender);
        }


        [HttpGet("{Id:int}")] 
        public async Task<ActionResult<Genero>> Get(int Id)
        {
            throw new  NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CreateGeneroDTO createGeneroDTO)
        {
            var genero = mapper.Map<Genero>(createGeneroDTO);
            _context.Add(genero);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }

    }
}
