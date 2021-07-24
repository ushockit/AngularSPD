using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Business.DTO
{
    public class UserDTO
    {
        public enum AuthRole
        {
            User,
            Editor,
            Admin
        }
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public AuthRole Role { get; set; }
    }
}
