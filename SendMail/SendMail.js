// Import required modules
import Nodemailer from 'nodemailer';

// Define the function to send an email
export default async function sendMail(subject, toEmail, otpText) {

  const transporter = Nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL, 
    to: toEmail,
    subject: subject,
    text: otpText,
  };


 await transporter.sendMail(mailOptions, function (error, info) {
    // console.log("under gush gaya hu..")
    if (error) {
      // console.log("error hai bhai", error)
    } else {
      // console.log("Email Sent",info);
      return true;
    }
  });
}