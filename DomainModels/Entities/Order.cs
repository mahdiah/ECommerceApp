using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModels.Entities
{
	public class Order
	{
		public Order()
		{
			CreatedDate = DateTime.Now;
			Items = new HashSet<OrderItem>();
		}
		[Key]
		public int OrderId { get; set; }

		[Column(TypeName = "decimal(18,2)")]
		public decimal Total { get; set; }

		[Column(TypeName = "varchar(50)")]
		[Required]
		public string Customer { get; set; }
		[Column(TypeName = "varchar(20)")]
		[Required]
		public string ContactNo { get; set; }

		[Column(TypeName = "varchar(250)")]
		public string ShippingAddress { get; set; }

		[Column(TypeName = "varchar(20)")]
		public string Status { get; set; }

		[ForeignKey("User")]
		public int UserId { get; set; }

		[ForeignKey("Cart")]
		public int CartId { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public virtual User User { get; set; }
		public virtual Cart Cart { get; set; }
		public virtual ICollection<OrderItem> Items { get; set; }
	}
}
