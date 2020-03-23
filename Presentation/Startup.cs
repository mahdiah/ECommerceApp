using Contracts;
using DomainModels.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Repository;

namespace Presentation
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
			services.AddScoped<IUnitOfWork, UnitOfWork>();
			services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

			services.AddDbContext<DatabaseContext>(options =>
			options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

			services.AddIdentity<User, Role>()
				.AddEntityFrameworkStores<DatabaseContext>()
				.AddDefaultTokenProviders();

			services.AddSession();

			services.AddControllersWithViews();

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
			}
			app.UseStaticFiles();

			app.UseRouting();

			app.UseAuthentication();

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllerRoute(
					name: "areas",
					pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

				endpoints.MapControllerRoute(
					name: "default",
					pattern: "{controller=Home}/{action=Index}/{id?}");

				//endpoints.MapAreaControllerRoute(
				//	 name: "admin",
				//	 areaName: "Admin",
				//	 pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
				//	);

				//endpoints.MapAreaControllerRoute(
				//	 name: "user",
				//	 areaName: "EndUser",
				//	 pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
				//	);
			});

			
		}
	}
}
