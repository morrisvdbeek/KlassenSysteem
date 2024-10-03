using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace KlassenSysteem.Server.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LoginController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            if (loginModel == null || string.IsNullOrEmpty(loginModel.Username) || string.IsNullOrEmpty(loginModel.Password))
            {
                return BadRequest("Invalid login request.");
            }

            var user = _context.Users.SingleOrDefault(u => u.Username == loginModel.Username);
            if (user == null)
            {
                return Unauthorized("Invalid username or password.");
            }

            var hashedPassword = HashPassword(loginModel.Password, user.Salt);
            if (user.PasswordHash != hashedPassword)
            {
                return Unauthorized("Invalid username or password.");
            }

            return Ok("Login successful.");
        }

        private static string HashPassword(string password, string salt)
        {
            using (var sha256 = SHA256.Create())
            {
                var saltedPassword = $"{password}{salt}";
                var saltedPasswordBytes = Encoding.UTF8.GetBytes(saltedPassword);
                var hash = sha256.ComputeHash(saltedPasswordBytes);
                return Convert.ToBase64String(hash);
            }
        }
    }

    public class LoginModel
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
    }
}
