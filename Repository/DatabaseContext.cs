﻿using DomainModels.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
	public class DatabaseContext : IdentityDbContext<User,Role,int>
	{

		public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
		{}

		public DbSet<User> AspNetUsers { get; set; }
		public DbSet<Role> AspNetRoles { get; set; }
		public DbSet<Order> Orders { get; set; }
		public DbSet<OrderItem> OrderItems { get; set; }
		public DbSet<Cart> Carts { get; set; }
		public DbSet<CartItem> CartItems { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<Category> Categories { get; set; }
		public DbSet<Transaction> Transactions { get; set; }


		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{

			//define foreign key and disable cascade delete option
			modelBuilder.Entity<Order>()
					.HasOne<User>(o => o.User)
					.WithMany(x => x.Orders)
					.HasForeignKey(i => i.UserId)
					.OnDelete(DeleteBehavior.Restrict);

			modelBuilder.Entity<Cart>()
					.HasOne<User>(c => c.User)
					.WithMany()
					.HasForeignKey(i => i.UserId)
					.OnDelete(DeleteBehavior.Restrict);

			modelBuilder.Entity<IdentityUserRole<int>>(i =>
			{
				i.HasKey(k => new { k.RoleId, k.UserId });
			});

			modelBuilder.Entity<IdentityUserLogin<int>>(i =>
			{
				i.HasIndex(x => new { x.ProviderKey, x.LoginProvider });
			});

			modelBuilder.Entity<IdentityUserClaim<int>>(i =>
			{
				i.HasKey(x => x.Id);
			});
			modelBuilder.Entity<IdentityRoleClaim<int>>(i =>
			{
				i.HasKey(x => x.Id);
			});
			modelBuilder.Entity<IdentityUserToken<int>>(i =>
			{
				i.HasKey(x => x.UserId);
			});

			base.OnModelCreating(modelBuilder);
		}
	}
}