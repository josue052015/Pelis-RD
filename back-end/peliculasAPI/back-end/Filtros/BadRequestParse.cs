﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.Filtros
{
    //convierte en un arreglo todos los errores
    public class BadRequestParse : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            var castResult = context.Result as IStatusCodeActionResult;

            if (castResult == null) return;

            var statusCode = castResult.StatusCode;
            if(statusCode == 400)
            {
                var response = new List<string>();
                var actualResult = context.Result as BadRequestObjectResult;
                if (actualResult.Value is string)
                {
                    response.Add(actualResult.Value.ToString());
                }
                else
                {
                    foreach(var key in context.ModelState.Keys)
                    {
                        foreach(var error in context.ModelState[key].Errors)
                        {
                            response.Add(error.ErrorMessage);
                        }
                    }
                }

                context.Result = new BadRequestObjectResult(response);
            }
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
        }
    }
}
