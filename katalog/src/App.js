import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.css';
import Katalog from './katalog';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path={"/"} >
            <Route path={""} element={<Katalog />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const nodemailer = require('nodemailer');

// async function sendEmailToManager(name, email, message, phone) {
//     const websiteUrl = 'http://localhost:3000'; // Replace this with your website URL
//     try {
//         // Create a Nodemailer transporter
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.USERNAME_EMAIL,//שם המייל
//                 pass: process.env.PASSWORD_EMAIL,//סיסמא
//             },
//             tls: {
//                 rejectUnauthorized: false 
//             }
//         });

//         // HTML content for the email with a button linking to your website
//         let mailOptions = {
//             from: process.env.EMAIL,//מי השולח
//             to:  process.env.EMAIL1,לאיזה מיל את שולחת 
//             subject: 'New Contact Form Submission',
//             html: `
//                 <p  style="direction: rtl; font-family: 'Arial', sans-serif; font-size: 16px; margin-bottom:100px;">
//                     Name: ${name}<br>
//                     Email: ${email}<br>
//                     Phone: ${phone}<br>
//                     Message: ${message}
//                 </p>
//                 <p style="text-align: right;">
//                     <a href="${websiteUrl}" style="padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none; border-radius: 5px; font-size: 18px;">בקר באתר</a>
//                 </p>
//             `,
//         };

//         try {
//             await transporter.sendMail(mailOptions);
//             console.log('Email sent successfully');
//         } catch (error) {
//             console.error('Error sending email:', error);
//             // Handle authentication errors
//             if (error.code === 'EAUTH') {
//                 console.error('Invalid login credentials. Please check your Gmail username and password.');
//             }
//         }
//     } catch (error) {
//         console.error('Error creating transporter:', error);
//     }
// }









// import React, { useState } from 'react';
// import './Zorkesher.css';
// import emailjs from 'emailjs-com';
// import ContactMailIcon from '@mui/icons-material/ContactMail';

// const Zorkesher = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [note, setNote] = useState('');

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//     .sendForm('service_o9po525', 'template_ty6ikdp', e.target, 'RscGkdFqIMWRvZgRk')
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert(`!תודה רבה על תגובתך, ${firstName}!`);
//         },
//         (error) => {
//           console.error(error.text);
//           alert('Oops! Something went wrong. Please try again later.');
//         }
//       );

//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setNote('');
//   };

//   return (
//     <>
//       <div className="zorkesher">
//         <div dir="rtl">
//           <div className="zorkesher-form">
//             <h2>צור - קשר</h2>
//             <form onSubmit={sendEmail}>
//               <div>
//                 <label htmlFor="firstName">שם פרטי:</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="lastName">שם משפחה:</label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email">מייל:</label>
//                 <input
//                   type="email"
//                   placeholder="youremail@gmail.com"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="note">הודעה:</label>
//                 <textarea
//                   id="note"
//                   name="note"
//                   value={note}
//                   onChange={(e) => setNote(e.target.value)}
//                 ></textarea>
//               </div>
//               <button type="submit">שלח</button>
//             </form>
//           </div>
//         </div>
//         <div className="zorkesher-icon" style={{ float: 'left', marginLeft: '12%', top: '20%' }}>
//           <span className="icon">
//             <ContactMailIcon
//               style={{
//                 color: '#ff9001',
//                 size: 'xl',
//                 fontSize: 60,
//                 aspectRatio: 1,
//                 width: '300',
//                 height: '300',
//                 float: 'left',
//               }}
//             />
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Zorkesher;



// .zorkesher {
//   display: flex;
// }

// .zorkesher-form {
//   max-width: 700px;
//   margin: 10px auto;
//   padding: 60px 60px;
//   border-radius: 5px;
//   color: #ff9c01;
//   float: right;
//   width: 100%;
// }

// .zorkesher-form h2 {
//   margin-bottom: 20px;
//   text-align: center;
//   color: #ff9c01;
// }

// .zorkesher-form label {
//   display: block;
//   margin-bottom: 5px;
//   text-align: right;
// }

// .zorkesher-form input,
// .zorkesher-form textarea {
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   box-shadow: 0 0 5px #ff9c01 inset;
// }

// .zorkesher-form textarea {
//   height: 100px;
// }

// .zorkesher-form button[type="submit"] {
//   padding: 10px 20px;
//   background-color: #ff9c01;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .zorkesher-form button[type="submit"]:hover {
//   background-color: #363636;
//   color: #ff9c01;
// }

// .zorkesher-icon {
//   transform: rotate(-7deg);
//   float: left;
//   background-size: 100%;
//   margin-top: 8%;
//   display: inline-block;
//   padding: 40px;
//   margin-left: auto;
// }