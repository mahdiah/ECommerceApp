using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DomainModels.Entities
{
	public class Category
	{
		public Category()
		{
			CreatedDate = DateTime.Now;
			Products = new HashSet<Product>();
		}

		[Key]
		public int CategoryId { get; set; }

		[Column(TypeName ="varchar(50)")]
		[Required]
		public string Name { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }

		public virtual ICollection<Product> Products { get; set; }
	}
}
