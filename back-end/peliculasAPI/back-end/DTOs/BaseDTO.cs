using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.DTOs
{
    public interface IBaseDTO
    {
        bool Deleted { get; set; }
    }
    public class BaseDTO : IBaseDTO
    {
        public virtual bool Deleted { get; set; }
    }
}
