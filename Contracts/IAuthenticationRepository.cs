using DomainModels.Entities;
using DomainModels.ViewModels;

namespace Contracts
{
	public interface IAuthenticationRepository : IRepository<User>
	{
		UserViewModel ValidateUser(LoginViewModel model);
	}
}
