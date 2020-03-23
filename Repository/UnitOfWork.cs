using Contracts;
using DomainModels.Entities;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
	public class UnitOfWork : IUnitOfWork
	{
		private DbContext _db;

		public UnitOfWork(DatabaseContext dbContext)
		{
			_db = dbContext;
		}

		private IAuthenticationRepository _AuthenticationRepository;

		public IAuthenticationRepository AuthenticationRepository
		{
			get {
				if (_AuthenticationRepository == null)
					_AuthenticationRepository = new AuthenticationRepository(_db);
				return _AuthenticationRepository; 
			}
			
		}

		private IRepository<Category> _CategoryRepository;

		public IRepository<Category> CategoryRepository
		{
			get
			{
				if (_CategoryRepository == null)
					_CategoryRepository = new Repository<Category>(_db);
				return _CategoryRepository;
			}

		}

		private IRepository<Product> _ProductRepository;

		public IRepository<Product> ProductRepository
		{
			get
			{
				if (_ProductRepository == null)
					_ProductRepository = new Repository<Product>(_db);
				return _ProductRepository;
			}

		}

		private IRepository<Order> _OrderRepository;

		public IRepository<Order> OrderRepository
		{
			get
			{
				if (_OrderRepository == null)
					_OrderRepository = new Repository<Order>(_db);
				return _OrderRepository;
			}

		}

		public int SaveChanges()
		{
			return _db.SaveChanges();
		}
	}
}
