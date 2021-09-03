using PeliculasAPI.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.Utils
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Paging<T>(this IQueryable<T> queryable, paginationDTO paginacionDTO)
        {
            return queryable
                 //.Skip((paginacionDTO.Pagina - 1) * paginacionDTO.RecordsPorPagina)
                 //.Take(paginacionDTO.RecordsPorPagina);
                 .Skip((paginacionDTO.Page - 1) * paginacionDTO.PageRecords)
                .Take(paginacionDTO.PageRecords);
        }
    }
}
