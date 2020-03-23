using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;


namespace Presentation.Security
{
	public class CustomAuthorize : Attribute, IAuthorizationFilter
	{
		public string Roles;
		public void OnAuthorization(AuthorizationFilterContext context)
		{
			if (context.HttpContext.User.Identity.IsAuthenticated)
			{
				if (!context.HttpContext.User.IsInRole(Roles))
				{
					context.Result = new RedirectToActionResult("UnAuthorize", "Account", new { area = "" });
				}
			}
			else
			{
				context.Result = new RedirectToActionResult("Login", "Account", new { area = "" });
			}
		}
	}
}
