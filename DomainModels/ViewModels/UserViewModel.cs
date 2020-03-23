

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DomainModels.ViewModels
{
	public class UserViewModel
	{
		public int UserId { get; set; }

		[Required]
		public string Username { get; set; }

		[Required]
		public string Password { get; set; }

		[Required]
		[DataType(DataType.Password)]
		[Compare("Password")]
		[NotMapped]
		public string ConfirmPassword { get; set; }

		[Required]
		public string Name { get; set; }

		[Required]
		[DataType(DataType.EmailAddress)]
		public string Email { get; set; }

		public string ContactNo { get; set; }

		public string IPAddress { get; set; }
	}
}
