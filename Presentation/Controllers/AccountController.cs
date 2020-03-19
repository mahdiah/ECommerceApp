using System;
using System.Threading.Tasks;
using DomainModels.Entities;
using DomainModels.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;
        private readonly SignInManager<User> signInManager;


        public AccountController(UserManager<User> _userManager, RoleManager<Role> _roleManager, SignInManager<User> _signInManager)
        {
            userManager = _userManager;
            roleManager = _roleManager;
            signInManager = _signInManager;
        }


        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async  Task<IActionResult> Login(LoginViewModel model)
        {
            var result = await signInManager.PasswordSignInAsync(model.Username, model.Password, false, false);
            if (result.Succeeded)
            {
                var user = await userManager.FindByNameAsync(model.Username);
                if(await userManager.IsInRoleAsync(user, "Admin"))
                {
                    return RedirectToAction("Index", "Home", new  { area = "Admin" });   
                }
                else
                {
                    return RedirectToAction("Index", "Home", new { area = "User" });
                }
            }
            return View(model);
        }

        public IActionResult SignUp()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> SignUp(UserViewModel model)
        {
            var user = new User
            {
                Name = model.Name,
                UserName = model.Username,
                CreatedDate = DateTime.Now,
                Email = model.Email,
                PhoneNumber = model.ContactNo
            };
            var identity = await userManager.CreateAsync(user, model.Password);
            if(identity.Succeeded)
            {
                var role = await roleManager.FindByNameAsync("Admin");
                if(role != null)
                {
                    var result = await userManager.AddToRoleAsync(user, role.Name);

                    if (result.Succeeded)
                    {
                        return RedirectToAction("Login");
                    }
                }
            }

            return View();
        }


        public IActionResult SignOut()
        {
            signInManager.SignOutAsync();
            return RedirectToAction("Login");
        }

        public IActionResult UnAuthorize()
        {
            return View();
        }
    }
}