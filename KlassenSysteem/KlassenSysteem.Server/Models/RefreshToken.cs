﻿namespace KlassenSysteem.Server.Models
{
    public class RefreshToken
    {
        public int Id { get; set; }
        public string Token { get; set; }
        public int UserId { get; set; }
        public DateTime ExpirationDate { get; set; }
        public User User { get; set; }
    }
}