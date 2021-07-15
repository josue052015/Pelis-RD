using apipeliculas.Validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace apipeliculas.Entitades
{
    public class Genero : IValidatableObject
    {
        public int id { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        //[PrimeraLetraMayuscula] esto fue un error de la validacion por atributo
        public string nombre { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (!string.IsNullOrEmpty(nombre))
            {
                var firstLetter = nombre[0].ToString();
                if(firstLetter != firstLetter.ToUpper())
                {
                    yield return new ValidationResult("La primera letra tiene que ser mayuscula", new string[] { nameof(nombre) });
                    //el yield es para llenar el Ienumerable y el new string es para pasarle los nombres de los campos a validar
                }
            }
        }
    }
}
