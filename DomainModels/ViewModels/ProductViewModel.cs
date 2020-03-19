using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace DomainModels.ViewModels
{
	public class ProductViewModel
	{
		public int ProductId { get; set; }

		[Required]
		public string Name { get; set; }

		[Required]
		public string Description { get; set; }

		[Required]
		public decimal UnitPrice { get; set; }

		[Required]
		public int CategoryId { get; set; }

		public string ImageName { get; set; }
		public string ImagePath { get; set; }
		[Required]
		public IFormFile File { get; set; }

		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }

	}
}
