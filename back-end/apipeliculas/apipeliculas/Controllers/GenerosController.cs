using apipeliculas.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apipeliculas.Controllers
{
    public class GenerosController
    {
        private readonly IRepositorios repo;

        public GenerosController(IRepositorios repo)
        {
            this.repo = repo;
        }
    }
}
