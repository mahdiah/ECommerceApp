using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
namespace DomainModels.Entities
{
		
	public class Role : IdentityRole<int>
	{
		public string Description { get; set; }
		public DateTime CreatedDate { get; set; }
	}
}
