using DomainModels.Entities;
using DomainModels.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace DomainModels.Mapper
{
	public static class Mapper
	{

		public static IEnumerable<CategoryViewModel> ToViewModel(this IEnumerable<Category> categories)
		{
			return categories.Select(c => c.ToViewModel()).ToList();
		}

		public static CategoryViewModel ToViewModel(this Category category)
		{
			return new CategoryViewModel
			{
				CategoryId = category.CategoryId,
				Name = category.Name,
				CreatedDate = category.CreatedDate,
				UpdatedDate = category.UpdatedDate
			};
		}

		public static IEnumerable<ProductViewModel> ToViewModel(this IEnumerable<Product> products)
		{
			return products.Select(c => c.ToViewModel()).ToList();
		}

		public static ProductViewModel ToViewModel(this Product product)
		{
			return new ProductViewModel
			{
				ProductId = product.ProductId,
				Name = product.Name,
				Description = product.Description,
				UnitPrice = product.UnitPrice,
				ImageName = product.ImageName,
				ImagePath = product.ImagePath,
				CreatedDate = product.CreatedDate,
				UpdatedDate = product.UpdatedDate
			};
		}

		public static Category ToModel(this CategoryViewModel model)
		{
			return new Category
			{
				CategoryId = model.CategoryId,
				Name = model.Name,
				CreatedDate = model.CreatedDate,
				UpdatedDate = model.UpdatedDate
			};
		}

		public static Product ToModel(this ProductViewModel model)
		{
			return new Product
			{
				ProductId = model.ProductId,
				Name = model.Name,
				Description = model.Description,
				UnitPrice = model.UnitPrice,
				ImagePath = model.ImagePath,
				ImageName = model.ImageName,
				CreatedDate = model.CreatedDate,
				UpdatedDate = model.UpdatedDate,
				CategoryId = model.CategoryId
			};
		}
	}
}
