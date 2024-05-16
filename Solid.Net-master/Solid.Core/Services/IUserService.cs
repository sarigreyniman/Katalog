using Solid.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid.Core.Services
{
    public interface IUserService
    {
        List<User> GetUsers();

        User GetById(int id);

        void Add(User user);
    }
}
