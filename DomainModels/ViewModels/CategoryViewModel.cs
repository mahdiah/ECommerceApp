using System;
using System.ComponentModel.DataAnnotations;

namespace DomainModels.ViewModels
{
	public class CategoryViewModel
	{
		public int CategoryId { get; set; }
		[Required]
		public string Name { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }
	}
}
