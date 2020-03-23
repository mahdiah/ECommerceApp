using System;
using System.Collections.Generic;
using DomainModels.ViewModels;
using Microsoft.AspNetCore.Mvc;
using DomainModels.Mapper;
using Microsoft.AspNetCore.Http;
using Contracts;
using System.Linq;

namespace Presentation.Areas.Admin.Controllers
{
    public class CategoryController : BaseController
    {
        public CategoryController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {

        }
        // GET: Admin/Category
        public ActionResult Index()
        {
            IEnumerable<CategoryViewModel> categories = uow.CategoryRepository.GetAll().ToViewModel();
            return View(categories);
        }

        // GET: Admin/Category/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/Category/Create
        [HttpPost]
        public ActionResult Create(CategoryViewModel model)
        {
            try
            {
                model.CreatedDate = DateTime.Now;
                uow.CategoryRepository.Add(model.ToModel());
                uow.SaveChanges();
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Admin/Category/Edit/5
        public ActionResult Edit(int id)
        {
            CategoryViewModel category = uow.CategoryRepository.GetById(id).ToViewModel();
            return View(category);
        }

        // POST: Admin/Category/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, CategoryViewModel model)
        {
            try
            {
                if (ModelState.IsValid && id == model.CategoryId)
                {
                    model.UpdatedDate = DateTime.Now;
                    uow.CategoryRepository.Update(model.ToModel());
                    uow.SaveChanges();
                    return RedirectToAction("Index");
                }

                return View(model);
            }
            catch
            {
                return View(model);
            }
        }

        // GET: Admin/Category/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Admin/Category/Delete/5
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
