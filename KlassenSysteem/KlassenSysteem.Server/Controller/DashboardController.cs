using KlassenSysteem.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KlassenSysteem.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DashboardController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public ActionResult<DashboardData> GetDashboardData()
        {
            var users = _context.Users.Select(u => new KlassenSysteem.Server.Models.User
            {
                Id = u.Id,
                FirstName = u.FirstName,
                LastName = u.LastName,
                Email = u.Email,
                PasswordHash = u.PasswordHash,
                Salt = u.Salt
            }).ToList();

            var dashboardData = new DashboardData
            {
                Users = users
            };

            return Ok(dashboardData);
        }
    }
}