using DomainModels.Entities;
using DomainModels.ViewModels;

namespace Contracts
{
	public interface IOrderRepository : IRepository<Order>
	{
		int SaveCart(Cart model);
		void PlaceOrder(TransactionViewModel model);
	}
}
