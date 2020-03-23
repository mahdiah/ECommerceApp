using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DomainModels.Entities
{
	public class CartItem
	{
		[Key]
		public int CartItemId { get; set; }
		public int ProductId { get; set; }

		[Column(TypeName = "decimal(18,2)")]
		public decimal UnitPrice { get; set; }
		public int Quantity { get; set; }
		public int Total { get; set; }

		[ForeignKey("Cart")]
		public int CartId { get; set; }

		public virtual Cart Cart { get; set; }
		public virtual Product Product { get; set; }
	}
}