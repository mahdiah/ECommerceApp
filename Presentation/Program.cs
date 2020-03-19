using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using DomainModels.Entities;
using Repository.DataInitializer;
using Microsoft.AspNetCore.Identity;
using System.Diagnostics;
using Microsoft.Extensions.DependencyInjection;
namespace Presentation
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var host = CreateHostBuilder(args).Build();
			using (var scope = host.Services.CreateScope())
			{
				var serviceProvider = scope.ServiceProvider;
				try
				{
					var userManager = serviceProvider.GetRequiredService<UserManager<User>>();
					var roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
					UserAndRoleDataInitializer.SeedData(userManager, roleManager);
				}
				catch (Exception ex)
				{
					Debug.WriteLine(ex.Message);
				}
			}
		}

		public static IHostBuilder CreateHostBuilder(string[] args) =>
			Host.CreateDefaultBuilder(args)
				.ConfigureWebHostDefaults(webBuilder =>
				{
					webBuilder.UseStartup<Startup>();
				});
	}
}
