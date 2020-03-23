using Contracts;
using DomainModels.Entities;
using DomainModels.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;

namespace Repository
{
	public class OrderRepository : Repository<Order>, IOrderRepository
	{
		private DatabaseContext _context
		{
			get { return db as DatabaseContext; }
		}

		public OrderRepository(DbContext db) : base(db)
		{ }
		public void PlaceOrder(TransactionViewModel model)
		{
			throw new NotImplementedException();
		}

		public int SaveCart(Cart model)
		{
			throw new NotImplementedException();
		}

	}
}
