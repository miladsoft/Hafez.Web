using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hafez.Web
{
    public class ApiController:Controller
    {
        private readonly HafezDbContext _db;
        public ApiController(HafezDbContext db)
        {
            _db = db;
        }

        [Route("api/hafez")]
        public IActionResult Hafez()
        {
            return Ok(_db.Fal);
        }
    }
}
