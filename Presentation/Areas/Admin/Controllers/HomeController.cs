using Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Areas.Admin.Controllers
{

    public class HomeController : BaseController
    {
        public HomeController(IUnitOfWork unitOfWork):base(unitOfWork)
        {

        }

        public IActionResult Index()
        {
            return View();
        }
    }
}