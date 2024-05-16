using Solid.Core.Entities;

namespace Solid.Data
{
    public class DataContext
    {
        public List<User> UserList { get; set; }

        public DataContext()
        {
            UserList = new List<User>();
        }
    }
}