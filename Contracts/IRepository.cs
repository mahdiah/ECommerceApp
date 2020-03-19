using System;
using System.Linq;
using System.Linq.Expressions;


namespace Contracts
{
	public interface IRepository<TEntity> where TEntity : class
	{
		IQueryable<TEntity> GetAll();
		IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> expression);
		TEntity GetById(object id);
		void Add(TEntity entity);
		void Update(TEntity entity);
		void Delete(TEntity entity);
	}
}
