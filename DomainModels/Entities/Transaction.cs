using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModels.Entities
{
	public class Transaction
	{

		public Transaction()
		{
			CreatedDate = DateTime.Now;
		}
		[Key]
		public string TransactionId { get; set; }
		public string PaymentId { get; set; }

		[Column(TypeName="varchar(20)")]
		[Required]
		public string Status { get; set; }

		[Column(TypeName = "varchar(20)")]
		public string PaymentType { get; set; }

		[Column(TypeName = "decimal(18,2)")]
		public decimal Amount { get; set; }

		[ForeignKey("User")]
		public int UserId { get; set; }

		[ForeignKey("Cart")]
		public int CartId { get; set; }

		public DateTime CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }

		public virtual User User { get; set; }
		public virtual Cart Cart { get; set; }
	}
}
