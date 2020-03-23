using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace DomainModels.Entities
{
	
	public class User : IdentityUser<int>
	{
		public string Name { get; set; }
		public string IPAddress { get; set; }
		public DateTime CreatedDate { get; set; }
		public virtual ICollection<Order> Orders { get; set; }
	}
}
