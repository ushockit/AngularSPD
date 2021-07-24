using Project1.Business.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Business.Services
{
    public class UsersService
    {
        private List<UserDTO> people = new List<UserDTO>
        {
            new UserDTO { Login="admin@gmail.com", Password="12345", Role = UserDTO.AuthRole.Admin },
            new UserDTO { Login="qwerty@gmail.com", Password="55555", Role = UserDTO.AuthRole.User }
        };


        public UserDTO SearchUser(string login, string password)
        {
            return people.FirstOrDefault(u => u.Login.Equals(login) && u.Password.Equals(password));
        }
    }
}
