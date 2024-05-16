using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace Solid.Core.Entities
{
    public class User
    {
       // public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string PostalCode { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string JewelryNumbersAndQuantityOfEachPrize { get; set; }

        public string ImageBase64 { get; set; } // הוספת השדה הזה
    }
}
