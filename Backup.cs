using ContosoUniversity.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ContosoUniversity
{
    public class Backup
    {
//        using ContosoUniversity.Data;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.AspNetCore.Builder;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.HttpsPolicy;
//using Microsoft.Extensions.Configuration;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.Extensions.Hosting;
//using NSwag;
//using NSwag.AspNetCore;
//using NSwag.Generation.Processors.Security;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace ContosoUniversity
//    {
//        public class Startup
//        {
//            public Startup(IConfiguration configuration)
//            {
//                Configuration = configuration;
//            }

//            public IConfiguration Configuration { get; }

//            // This method gets called by the runtime. Use this method to add services to the container.
//            public void ConfigureServices(IServiceCollection services)
//            {
//                services.AddDbContext<SchoolContext>(options =>
//                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

//                services.AddDatabaseDeveloperPageExceptionFilter();

//                services.AddControllersWithViews();

//                services.AddSwaggerDocument(document =>
//                {
//                    document.AddSecurity("bearer", new OpenApiSecurityScheme
//                    {
//                        Type = OpenApiSecuritySchemeType.OAuth2,
//                        Description = "OAuth2",
//                        Flow = OpenApiOAuth2Flow.Implicit,
//                        AuthorizationUrl = "/connect/authorize",
//                        OpenIdConnectUrl = "/.well-known/openid-configuration",
//                        TokenUrl = "/connect/token",
//                        Flows = new OpenApiOAuthFlows()
//                        {
//                            AuthorizationCode = new OpenApiOAuthFlow()
//                            {
//                                AuthorizationUrl = "/connect/authorize",
//                                TokenUrl = "/connect/token",
//                                Scopes = new Dictionary<string, string>
//                            {
//                                {"PhoneBookSyncApp.WebAPI", "API Access"},
//                                {"openid", "OpenId Token Access"},
//                                {"profile", "Profile Access"}
//                            }
//                            }
//                        }
//                    });


//                }
    
//        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
//        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
//                {
//                    if (env.IsDevelopment())
//                    {
//                        app.UseDeveloperExceptionPage();
//                    }
//                    else
//                    {
//                        app.UseExceptionHandler("/Home/Error");
//                        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//                        app.UseHsts();
//                    }
//                    app.UseHttpsRedirection();
//                    app.UseStaticFiles();

//                    app.UseRouting();

//                    app.UseAuthorization();

//                    app.UseEndpoints(endpoints =>
//                    {
//                        endpoints.MapControllerRoute(
//                            name: "default",
//                            pattern: "{controller=Home}/{action=Index}/{id?}");
//                    });

//                    app.UseSwaggerUi3(options =>
//                    {
//                        options.OAuth2Client = new OAuth2ClientSettings
//                        {
//                            ClientId = "Swagger",
//                            AppName = "Swagger",
//                            ClientSecret = ""
//                        };
//                    });


//                }
//            }
//        }

    }
}
