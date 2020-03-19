using System;
using System.Collections.Generic;
using System.IO;
using Contracts;
using DomainModels.Mapper;
using DomainModels.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Areas.Admin.Controllers
{
    public class ProductController : BaseController
    {
        private IWebHostEnvironment _env;
        public ProductController(IUnitOfWork unitOfWork, IWebHostEnvironment env) : base(unitOfWork)
        {
            _env = env;
        }
        // GET: Admin/Product
        public ActionResult Index()
        {
            IEnumerable<ProductViewModel> products = uow.ProductRepository.GetAll().ToViewModel();
            return View(products);
        }

        // GET: Admin/Product/Details/5
        //public ActionResult Details(int id)
        //{
        //    return View();
        //}

        // GET: Admin/Product/Create
        public ActionResult Create()
        {
            var categories = uow.CategoryRepository.GetAll().ToViewModel();
            ViewBag.Categories = categories;
            return View();
        }

        // POST: Admin/Product/Create
        [HttpPost]
        public ActionResult Create(ProductViewModel model)
        {

            try
            {
                var folderPath = Path.Combine(_env.WebRootPath, "uploads");
                bool isExist = Directory.Exists(folderPath);
                if (!isExist)
                {
                    Directory.CreateDirectory(folderPath);
                }

                string filename = Path.GetFileName(model.File.FileName);
                var filestream = new FileStream(Path.Combine(folderPath, filename), FileMode.Create);

                model.File.CopyToAsync(filestream);

                model.ImageName = filename;
                model.ImagePath = "/uploads/" + filename;
                model.CreatedDate = DateTime.Now;
                uow.ProductRepository.Add(model.ToModel());
                uow.SaveChanges();

                return RedirectToAction("Index");
            }
            catch
            {
                var categories = uow.CategoryRepository.GetAll().ToViewModel();
                ViewBag.Categories = categories;
                return View(model);
            }
        }

        // GET: Admin/Product/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Admin/Product/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Admin/Product/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Admin/Product/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
