using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.Entidades
{
    public interface IBase
    {
       bool Deleted { get; set; }
    }
    public class Base : IBase
    {
        public virtual bool Deleted { get; set; }
    }
}
