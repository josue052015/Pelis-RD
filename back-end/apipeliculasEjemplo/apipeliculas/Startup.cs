using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apipeliculas.Filters;
using apipeliculas.Repositorios;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace apipeliculas
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
            services.AddResponseCaching();
            services.AddTransient<ActionFilter>();
            services.AddTransient<IRepositorios, RepositorioEnMemoria>(); //esto es para configurar el sistema de inyeccion de dependencias, y si le ponemos que esa interfaz se sirve de esa clase, si cambiamos la clase del repositorio solo tenemos que cambiar la clase aqui y no en ninguna otra parte del api
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
   
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseResponseCaching();
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
