using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Contracts;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
	public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
	{
		protected DbContext db;

		public Repository(DbContext dbContext)
		{
			db = dbContext;
		}
		public void Add(TEntity entity)
		{
			db.Set<TEntity>().Add(entity);
		}

		public void Delete(TEntity entity)
		{
			db.Set<TEntity>().Remove(entity);
		}

		public void DeleteById(object id)
		{
			var entity = db.Set<TEntity>().Find(id);
			if (entity != null)
				db.Set<TEntity>().Remove(entity);
		}

		IQueryable<TEntity> IRepository<TEntity>.GetAll()
		{
			return db.Set<TEntity>().AsNoTracking();
		}

		public IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> expression)
		{
			return db.Set<TEntity>().Where(expression).AsNoTracking();
		}

		public TEntity GetById(object id)
		{
			return db.Set<TEntity>().Find(id);
		}

		public void Update(TEntity entity)
		{
			db.Entry<TEntity>(entity).State = EntityState.Modified;
		}

		
	}
}
