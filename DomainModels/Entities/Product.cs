using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModels.Entities
{
	public class Product
	{

		public Product()
		{
			CreatedDate = DateTime.Now;
		}
		[Key]
		public int ProductId { get; set; }

		[Column(TypeName = "varchar(50)")]
		[Required]
		public string Name { get; set; }

		[Column(TypeName = "varchar(250)")]
		[Required]
		public string  Description { get; set; }

		[Column(TypeName = "decimal(18,2)")]
		[Required]
		public decimal UnitPrice { get; set; }

		[ForeignKey("Category")]
		public int CategoryId { get; set; }

		[Column(TypeName = "varchar(250)")]
		[Required]
		public string ImageName { get; set; }

		[Column(TypeName = "varchar(500)")]
		[Required]
		public string ImagePath { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public virtual Category Category { get; set; }

	}
}
