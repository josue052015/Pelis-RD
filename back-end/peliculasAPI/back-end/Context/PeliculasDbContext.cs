using Microsoft.EntityFrameworkCore;
using PeliculasAPI.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.Context
{
    public class PeliculasDbContext : BaseDbContext
    {
        public PeliculasDbContext(DbContextOptions<PeliculasDbContext> options) : base(options)
        {
        }
        public DbSet<Genero> Generos { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        

            base.OnModelCreating(modelBuilder);
        }
    }
}

