using DomainModels.Entities;

namespace Contracts
{
	public interface IUnitOfWork
	{
		IAuthenticationRepository AuthenticationRepository { get; }
		IRepository<Category> CategoryRepository { get; }
		IRepository<Product> ProductRepository { get; }
		IRepository<Order> OrderRepository { get; }

		int SaveChanges();
	}
}
