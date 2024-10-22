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
        public async Task<ActionResult<IEnumerable<string>>> GetDashboardData()
        {
            var users = await _context.Users
                .Select(u => $"{u.FirstName} {u.LastName}")
                .ToListAsync();

            return Ok(users);
        }
    }
}
