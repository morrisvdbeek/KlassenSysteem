using KlassenSysteem.Server.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace KlassenSysteem.Server.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RegistrationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register([FromBody] User registerModel)
        {
            if (registerModel == null || string.IsNullOrEmpty(registerModel.Email) || string.IsNullOrEmpty(registerModel.PasswordHash))
            {
                return BadRequest("Registreren mislukt");
            }

            // Controleer of er al een gebruiker met dit e-mailadres bestaat
            if (_context.Users.Any(u => u.Email == registerModel.Email))
            {
                return BadRequest("Deze email is al in gebruik.");
            }

            // Genereer een salt en hash het wachtwoord
            var salt = GenerateSalt();
            var hashedPassword = HashPassword(registerModel.PasswordHash, salt);

            var user = new User
            {
                FirstName = registerModel.FirstName,
                LastName = registerModel.LastName,
                Email = registerModel.Email,
                PasswordHash = hashedPassword,
                Salt = salt
            };

            // Sla de gebruiker op naar de database
            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok("Succesvol geregistreerd");
        }

        private string HashPassword(object password, string salt)
        {
            throw new NotImplementedException();
        }

        private static string GenerateSalt()
        {
            byte[] saltBytes = new byte[16];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(saltBytes);
            }
            return Convert.ToBase64String(saltBytes);
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
}
