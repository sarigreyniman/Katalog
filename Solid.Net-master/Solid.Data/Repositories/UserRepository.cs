﻿using MailKit.Net.Smtp;
using MailKit.Security;
using System.IO;
using MimeKit;
using Solid.Core.Entities;
using Solid.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }
        public List<User> GetUsers()
        {
            return _context.UserList.ToList(); // Returning list of users
        }


        public void AddUser(User user)
        {

            _context.UserList.Add(user); // הוספת המשתמש לרשימה
            SendEmailAsync($"Katalog: {user.FirstName} {user.LastName}", user).Wait(); // שליחת המייל כסנכרונית


        }

        public async Task SendEmailAsync(string subject, User user)
        {
            // קביעת פרטי השרת המייל
            string smtpServer = "smtp.gmail.com";
            int port = 587;
            string senderEmail = "sari0534170279@gmail.com"; // הזן את האימייל שלך כאן
            string senderPassword = "vjwbnyhjyumeudyk"; // הזן את הסיסמה שלך כאן

            // יצירת הודעת דוא"ל
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Sari", senderEmail));
            message.To.Add(new MailboxAddress("", "sarigreyniman@gmail.com")); // הזן כתובת דוא"ל של הנמען
            message.Subject = subject;
            var bodyBuilder = new BodyBuilder();
            bodyBuilder.TextBody = $"First Name: {user.FirstName}\n" +
                               $"Last Name: {user.LastName}\n" +
                               $"Phone: {user.Phone}\n" +
                               $"Address: {user.Address}\n" +
                               $"Zip Code: {user.PostalCode}\n" +
                               $"City: {user.City}\n" +
                               $"Country: {user.Country}\n" +
                               $"Jewelry Numbers and Quantity: {user.JewelryNumbersAndQuantityOfEachPrize}";

            if (!string.IsNullOrEmpty(user.ImageBase64))
            {
                var imageBytes = Convert.FromBase64String(user.ImageBase64);
                bodyBuilder.Attachments.Add("image.jpg", imageBytes, new ContentType("image", "jpeg"));
            }



            message.Body = bodyBuilder.ToMessageBody();


            // התחברות ושליחת ההודעה
            using (var client = new SmtpClient())
            {
                await client.ConnectAsync(smtpServer, port, SecureSocketOptions.StartTls);
                await client.AuthenticateAsync(senderEmail, senderPassword);
                await client.SendAsync(message);
                await client.DisconnectAsync(true);
            }
        }

        public void DeleteUser(int id)
        {
           // _context.UserList.Remove(_context.UserList.Find(u => u.Id == id));
        }

        public User GetById(int id)
        {
            //  return _context.UserList.Find(u => u.Id == id);
            return new User();
        }

       

        public User UpdateUser(int id, User user)
        {
          //  var updateUser = _context.UserList.Find(u => u.Id == id);
           
            return null;
        }
    }
}
