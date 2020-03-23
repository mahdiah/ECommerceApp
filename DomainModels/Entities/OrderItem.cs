using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DomainModels.Entities
{
	public class OrderItem
	{

		[Key]
		public int OrderItemId { get; set; }

		[ForeignKey("Product")]
		public int ProductId { get; set; }

		[Column(TypeName = "decimal(18,2)")]
		public decimal UnitPrice { get; set; }

		public int Quantity { get; set; }
		public int Total { get; set; }

		[ForeignKey("Order")]
		public int OrderId { get; set; }

		public virtual Order Order { get; set; }
		public virtual Product Product { get; set; }
	}
}