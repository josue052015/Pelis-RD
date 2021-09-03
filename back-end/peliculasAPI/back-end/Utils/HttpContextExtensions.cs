using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.Utils
{
    //esto es para devolver al front end la cantidad de registros, insertando en la cabecera esta informacion
    public static class HttpContextExtensions
    {
        public async static Task InsertPaginationParamsThroughHeader<T>(this HttpContext httpContext,
            IQueryable<T> queryable)
        {
            if(httpContext == null) { throw new ArgumentNullException(nameof(httpContext)); }

            double pageAmount = await queryable.CountAsync();

            httpContext.Response.Headers.Add("cantidadTotalRegistros", pageAmount.ToString());

        }

    }
}
