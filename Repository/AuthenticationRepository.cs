using Contracts;
using DomainModels.Entities;
using DomainModels.ViewModels;
using Microsoft.EntityFrameworkCore;


namespace Repository
{
	public class AuthenticationRepository : Repository<User>, IAuthenticationRepository
	{
		private DatabaseContext _context
		{
			get { return db as DatabaseContext; }
		}

		public AuthenticationRepository(DbContext db ): base(db)
		{}

		public UserViewModel ValidateUser(LoginViewModel model)
		{
			//User userData = _context.Users.Include("Roles").Where(u => u.Username == model.Username && u.Password == model.Password).FirstOrDefault();
			//if(userData != null)
			//{
			//	return new UserViewModel
			//	{
			//		Username = userData.Username,
			//		Name = userData.Name,
			//		Address = userData.Address,
			//		Password = userData.Password,
			//		ContactNo = userData.ContactNo,
			//		Roles = userData.Roles.Select(r => r.Name).ToArray()
			//	};
			//}
			return null;
		}
	}
}
