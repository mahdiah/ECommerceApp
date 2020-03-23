using DomainModels.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DomainModels.ViewModels
{
	[NotMapped]
	public class TransactionViewModel : Transaction
	{
		public string Name { get; set; }
		public string Address { get; set; }
	}
}
