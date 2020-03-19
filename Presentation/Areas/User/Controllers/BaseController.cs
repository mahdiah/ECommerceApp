using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Presentation.Security;

namespace Presentation.Areas.User.Controllers
{
    [Area("User")]
    [CustomAuthorize(Roles="User")]
    public class BaseController : Controller
    {
        
    }
}