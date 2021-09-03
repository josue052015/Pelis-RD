using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.ApiBehavior
{
    public static class BehaviorBadRequests
    {
        public static void Parse(ApiBehaviorOptions options)
        {
            options.InvalidModelStateResponseFactory = ActionContext =>
            {
                var response = new List<string>();
                foreach (var key in ActionContext.ModelState.Keys)
                {
                    foreach (var error in ActionContext.ModelState[key].Errors)
                    {
                        response.Add(error.ErrorMessage);
                    }
                }
                return new BadRequestObjectResult(response);
            };
        }
    }
}
