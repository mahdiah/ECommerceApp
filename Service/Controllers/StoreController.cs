using Contracts;
using DomainModels.Mapper;
using DomainModels.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;



namespace Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly IUnitOfWork _uow;

        public StoreController(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
        }

        public IEnumerable<ProductViewModel> GetProducts()
        {
            return _uow.ProductRepository.GetAll().ToViewModel();
        }

        [HttpPost]
        public IActionResult SaveCart()
        {
            //save th
            return Ok(new { id= 1 });
        }
    }
}
