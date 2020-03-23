using Contracts;
using Microsoft.AspNetCore.Mvc;
using Presentation.Security;

namespace Presentation.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize(Roles ="Admin")]
    public class BaseController : Controller
    {
        protected IUnitOfWork uow;

        public BaseController(IUnitOfWork unitOfWork)
        {
            uow = unitOfWork;
        }
       
    }
}