using KlassenSysteem.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace KlassenSysteem.Server.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public LoginController(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            if (loginModel == null || string.IsNullOrEmpty(loginModel.Email) || string.IsNullOrEmpty(loginModel.Password))
            {
                return BadRequest(new { message = "Ongeldige login aanvraag." });
            }

            var user = _context.Users.SingleOrDefault(u => u.Email == loginModel.Email);
            if (user == null)
            {
                return Unauthorized(new { message = "Een account met dit Email Adress bestaat niet." });
            }

            var hashedPassword = HashPassword(loginModel.Password, user.Salt);
            if (user.PasswordHash != hashedPassword)
            {
                return Unauthorized(new { message = "Ongeldige Email Adress of Wachtwoord." });
            }

            var token = GenerateJwtToken(user);
            var refreshToken = GenerateRefreshToken();

            _context.RefreshTokens.Add(new RefreshToken
            {
                Token = refreshToken,
                UserId = user.Id,
                ExpirationDate = DateTime.UtcNow.AddDays(7)
            });
            _context.SaveChanges();

            return Ok(new { token, refreshToken });
        }

        [HttpPost]
        [Route("refresh-token")]
        public IActionResult RefreshToken([FromBody] RefreshTokenModel refreshTokenModel)
        {
            var refreshToken = _context.RefreshTokens.SingleOrDefault(rt => rt.Token == refreshTokenModel.Token);
            if (refreshToken == null || refreshToken.ExpirationDate <= DateTime.UtcNow)
            {
                return Unauthorized(new { message = "Invalid or expired refresh token." });
            }

            var user = _context.Users.SingleOrDefault(u => u.Id == refreshToken.UserId);
            if (user == null)
            {
                return Unauthorized(new { message = "User not found." });
            }

            var newAccessToken = GenerateJwtToken(user);
            return Ok(new { token = newAccessToken });
        }

        [HttpGet]
        [Route("validate-token")]
        public IActionResult ValidateToken()
        {
            var token = Request.Headers["Authorization"].ToString().Replace("Bearer ", "");

            if (string.IsNullOrEmpty(token))
            {
                return Unauthorized(new { message = "Token is missing." });
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = true,
                    ValidIssuer = _configuration["Jwt:Issuer"],
                    ValidateAudience = true,
                    ValidAudience = _configuration["Jwt:Audience"],
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);
                return Ok();
            }
            catch
            {
                return Unauthorized(new { message = "Invalid token." });
            }
        }

        private string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }

        private string GenerateJwtToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim("firstName", user.FirstName),
                new Claim("lastName", user.LastName),
                new Claim("passwordHash", user.PasswordHash),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(4),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
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
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}