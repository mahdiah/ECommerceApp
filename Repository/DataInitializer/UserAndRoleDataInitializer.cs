using System;

using DomainModels.Entities;
using Microsoft.AspNetCore.Identity;

namespace Repository.DataInitializer
{
    public static class UserAndRoleDataInitializer
	{
        public static void SeedData(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            SeedRoles(roleManager);
            SeedUsers(userManager);
        }

        private static void SeedUsers(UserManager<User> userManager)
        {
            if (userManager.FindByEmailAsync("admin@eshop.com").Result == null)
            {
                User user = new User();
                user.Name = "admin";
                user.UserName = "administrator";
				user.CreatedDate = DateTime.Now;
				user.Email = "admin@eshop.com";
				user.PhoneNumber = "123456987";
            

             IdentityResult result = userManager.CreateAsync(user, "Gambit123*").Result;

                if (result.Succeeded)
                {
                    userManager.AddToRoleAsync(user, "Admin").Wait();
                }
            }


            if (userManager.FindByEmailAsync("user@eshop.com").Result == null)
            {
                User user = new User();
                user.Name = "user";
                user.UserName = "end user";
                user.CreatedDate = DateTime.Now;
                user.Email = "user@eshop.com";
				user.PhoneNumber = "1234569877";

                IdentityResult result = userManager.CreateAsync(user, "Gambit123*").Result;

                if (result.Succeeded)
                {
                    userManager.AddToRoleAsync(user, "User").Wait();
                }
            }
        }

        private static void SeedRoles(RoleManager<Role> roleManager)
        {
            if (!roleManager.RoleExistsAsync("user").Result)
            {
                Role role = new Role();
                role.Name = "User";
                IdentityResult roleResult = roleManager.CreateAsync(role).Result;
            }


            if (!roleManager.RoleExistsAsync("Admin").Result)
            {
                Role role = new Role();
                role.Name = "Admin";
                IdentityResult roleResult = roleManager.CreateAsync(role).Result;
            }
        }

    }
}
