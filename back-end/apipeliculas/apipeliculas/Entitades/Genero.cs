using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace apipeliculas.Entitades
{
    public class Genero
    {
        public int id { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string nombre { get; set; }
}
}
