using ContosoUniversity.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Headers;
using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;

namespace ContosoUniversity
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
            services.AddDbContext<SchoolContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddDatabaseDeveloperPageExceptionFilter();
            services.AddControllersWithViews();
            
            services.AddSpaStaticFiles(configuration => {
                configuration.RootPath = "contoso-university/dist";
            });

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
            });
            services.AddControllers();
            

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
            

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();
            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
            
            var spaPath = "/app";
            if (env.IsDevelopment())
            {
                app.MapWhen(y => y.Request.Path.StartsWithSegments(spaPath), client =>
                {
                    client.UseSpa(spa =>
                    {
                        spa.UseProxyToSpaDevelopmentServer("https://localhost:6364");
                    });
                });
            }
            else
            {
                app.Map(new PathString(spaPath), client =>
                {
                    client.UseSpaStaticFiles();
                    client.UseSpa(spa => {
                        spa.Options.SourcePath = "contoso-university";

                        // adds no-store header to index page to prevent deployment issues (prevent linking to old .js files)
                        // .js and other static resources are still cached by the browser
                        spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                        {
                            OnPrepareResponse = ctx =>
                            {
                                ResponseHeaders headers = ctx.Context.Response.GetTypedHeaders();
                                headers.CacheControl = new CacheControlHeaderValue
                                {
                                    NoCache = true,
                                    NoStore = true,
                                    MustRevalidate = true
                                };
                            }
                        };
                    });
                });
            }

        }
    }
}
