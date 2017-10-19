using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Burndown.UI.Controllers
{
    public class TestingController : Controller
    {
        public IActionResult Index()
        {
            throw new Exception();
            return View();
        }
    }
}