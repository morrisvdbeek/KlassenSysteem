namespace KlassenSysteem.Server.Models
{
    public class User
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string PasswordHash { get; set; }
        public required string Salt { get; set; }
    }

    public class UserRegistrationModel
    {
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
    public class DashboardData
    {
        public List<User> Users { get; set; } = [];
    }
}
