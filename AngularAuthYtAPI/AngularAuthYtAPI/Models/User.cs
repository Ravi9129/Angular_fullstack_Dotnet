﻿using Microsoft.VisualBasic;

namespace AngularAuthYtAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Username { get; set; }
        public int Number { get; set; }
        public DateFormat DoB { get; set; }
        public string Addresss { get; set; }
        public string? Password { get; set; }
        public string? Token { get; set; }
        public string? Role { get; set; }
        public string? Email { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
    }
}
